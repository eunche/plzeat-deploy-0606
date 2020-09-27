from django.db import models
from django.utils import timezone
from django.utils.html import mark_safe
from users import models as users_models
from . import models as foods_models
from . import my_validator
import os
import random


# Create your models here.
def photo_path(instance, filename):
    basefilename, file_extension = os.path.splitext(filename)
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    randomstr = ''.join((random.choice(chars)) for x in range(10))
    return 'enrolled_food/{userid}/{randomstring}{ext}'.format(userid=instance.user.id, basename=basefilename, randomstring=randomstr, ext=file_extension)


class HowToUseFood(models.Model):
    name = models.CharField(max_length=100)
    how_to_trim = models.TextField(max_length=10000, null=True)
    how_to_store = models.TextField(max_length=10000, null=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.replace(" ", "")
        super().save(*args, **kwargs)


class Food(models.Model):
    name = models.CharField(max_length=20)
    photo = models.ImageField(upload_to=photo_path, default="default.png")
    expired_date = models.DateField(null=False)
    quantity = models.PositiveIntegerField(null=True)
    created = models.DateTimeField(auto_now_add=True, null=True)
    user = models.ForeignKey(
        users_models.User, related_name="foods", on_delete=models.CASCADE
    )

    def short_name(self):
        if len(self.name) > 6:
            return self.name[:7] + ".."
        else:
            return self.name

    def count_date(self):
        cal_date = self.expired_date - timezone.localtime().date()
        cal_date = cal_date.days
        if cal_date > 0:
            return f"{cal_date}일 남음"
        elif cal_date == 0:
            return "오늘까지"
        else:
            return mark_safe(f"<span style='color:red;'>{abs(cal_date)}일 지남</span>")

        # cal_date = str(cal_date)

        # if cal_date[0] == "-":
        #     return mark_safe(f"<span style='color:red;'>{cal_date[1]}일 지남</span>")
        # else:
        #     if cal_date[0] == "0":
        #         return "오늘까지"
        #     elif int(cal_date[0]) > 0:
        #         return f"{cal_date[0]}일 남음"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.name = self.name.replace(" ", "")
        super().save(*args, **kwargs)
