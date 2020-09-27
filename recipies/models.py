from django.db import models
from .my_crawling import gogogo
from users import models as user_models
from django.utils import timezone
from django_random_queryset import RandomManager
import os
import random


def photo_path(instance, filename):
    basefilename, file_extension = os.path.splitext(filename)
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    randomstr = ''.join((random.choice(chars)) for x in range(10))
    return 'recipies/{randomstring}{ext}'.format(basename=basefilename, randomstring=randomstr, ext=file_extension)


class Recipe(models.Model):
    EASY = "쉬움"
    SOSO = "중급"
    HARD = "어려움"
    LEVEL_CHOICES = (
        (EASY, "쉬움"),
        (SOSO, "중급"),
        (HARD, "어려움"),
    )

    name = models.CharField(max_length=100, null=True)
    photo = models.ImageField(upload_to=photo_path, default="default.png")

    how_to_create = models.TextField(max_length=10000, null=True)
    recipe_quantity = models.IntegerField(null=True)
    recipe_time = models.IntegerField(null=True)
    recipe_level = models.CharField(
        max_length=30, choices=LEVEL_CHOICES, null=True)
    creator = models.ForeignKey(
        user_models.User, related_name="creators", on_delete=models.CASCADE, blank=True, null=True)
    objects = RandomManager()

    def total_rating(self):
        total_rating = 0
        for rating in self.comments.all():
            total_rating = total_rating + int(rating.rating)
        try:
            total_rating = total_rating/self.comments.count()
            return round(total_rating, 2)
        except ZeroDivisionError:
            return 0

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if RecipeLink.objects.filter(recipe=self).exists():
            RecipeLink.objects.filter(recipe=self).delete()
        links = gogogo(self.name)
        for link in links:
            new_link_obj = RecipeLink(name=link, recipe=self)
            new_link_obj.save()


class FoodInRecipe(models.Model):
    name = models.CharField(max_length=100, null=True)
    recipe = models.ForeignKey(
        "Recipe", on_delete=models.CASCADE, blank=True, null=True, related_name="foods")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.replace(" ", "")
        super().save(*args, **kwargs)


class RecipeLink(models.Model):
    name = models.CharField(max_length=50)
    recipe = models.ForeignKey(
        Recipe, related_name="links", on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class RecipePercent(models.Model):
    user = models.ForeignKey(
        user_models.User, related_name="percents", on_delete=models.CASCADE)
    recipe = models.ForeignKey(
        Recipe, related_name="percents", on_delete=models.CASCADE)
    percent = models.IntegerField()


class Comment(models.Model):
    STA1 = 1
    STA2 = 2
    STA3 = 3
    STA4 = 4
    STA5 = 5
    STAR_CHOICES = (
        ("1", 1),
        ("2", 2),
        ("3", 3),
        ("4", 4),
        ("5", 5),
    )
    user = models.ForeignKey(
        user_models.User, related_name="comments", on_delete=models.CASCADE)
    recipe = models.ForeignKey(
        "Recipe", related_name="comments", on_delete=models.CASCADE)
    create_time = models.DateField(auto_now=True)
    rating = models.CharField(
        max_length=10, choices=STAR_CHOICES, default=5)
    body = models.TextField(max_length=100)

    def time_turm(self):
        time_turm = timezone.localtime().date() - self.create_time
        time_turm = time_turm.days
        if time_turm > 0:
            return f"{time_turm}일 전"
        else:
            return "오늘"
