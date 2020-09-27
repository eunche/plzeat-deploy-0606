from django.contrib import admin
from . import models

# Register your models here.


class LinkInline(admin.TabularInline):
    model = models.RecipeLink


class PercentInline(admin.TabularInline):
    model = models.RecipePercent


class FoodInline(admin.TabularInline):
    model = models.FoodInRecipe


class CommentInline(admin.TabularInline):
    model = models.Comment


@admin.register(models.Recipe)
class RecipeAdmin(admin.ModelAdmin):
    inlines = [
        FoodInline,
        LinkInline,
        PercentInline,
        CommentInline,
    ]


@admin.register(models.FoodInRecipe)
class FoodInRecipeAdmin(admin.ModelAdmin):
    pass


@admin.register(models.RecipeLink)
class RecipeLinkAdmin(admin.ModelAdmin):
    pass


@admin.register(models.RecipePercent)
class RecipePercentAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    pass
