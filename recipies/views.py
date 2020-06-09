from . import my_crawling
from django.shortcuts import render
from django.db.models import Count
from django.core.paginator import Paginator
from users import models as users_model
from . import models as recipies_model
from . import forms
from django.utils.html import mark_safe


def recipe_list(request, pk):
    user = users_model.User.objects.get(pk=pk)
    user_foods = user.foods.all()
    user_food_list = []
    for food in user.foods.all():
        user_food_list.append(food.name)
    reco_recipe = recipies_model.Recipe.objects.all()
    resulted_reco_recipe = []
    reco_food_percent = []
    for reco_food in reco_recipe:
        food_list = []
        count = 0
        reco_food_len = 0
        for food in reco_food.food.all():
            count = count + user_food_list.count(food.name)
            reco_food_len = reco_food_len + 1
        if count/reco_food_len >= 0:
            reco_per = int((count/reco_food_len)*100)
            reco_food_percent.append(reco_per)
            resulted_reco_recipe.append(reco_food.name)
    recipes = reco_recipe.filter(name__in=resulted_reco_recipe)
    count = 0
    for recipe in recipes:
        try:
            percent_model = recipies_model.RecipePercent.objects.get(
                user=request.user, recipe=recipe)
            percent_model.percent = reco_food_percent[count]
            percent_model.save()
        except recipies_model.RecipePercent.DoesNotExist:
            percent_model = recipies_model.RecipePercent.objects.create(
                user=request.user, recipe=recipe, percent=reco_food_percent[count])
            percent_model.save()
        count = count + 1
    how_show = 6
    paginator = Paginator(recipes, how_show)
    page_number = request.GET.get("page")
    paged_recipes = paginator.get_page(page_number)

    context = {
        "user": user,
        "recipes": recipes,
        "paged_recipes": paged_recipes,
        "paginator": paginator,
        "page_number": page_number,
        "how_show": how_show,
        "percent": reco_food_percent,
        "percent_list_len": len(reco_food_percent)
    }
    return render(request, "recipies/recipe_list.html", context)


def recipe_detail(request, pk):
    result_foods = []
    user = users_model.User.objects.get(pk=request.user.pk)
    user_foods = user.foods.all()
    user_food_list = []
    for food in user.foods.all():
        user_food_list.append(food.name)

    recipe = recipies_model.Recipe.objects.get(pk=pk)
    recipe_food_list = []
    for food in recipe.food.all():
        recipe_food_list.append(food.name)

    for food in recipe_food_list:
        if food in user_food_list:
            result_foods.append(
                mark_safe(f"<i class='fas fa-check'></i><span>{food}</span>"))
        else:
            result_foods.append(
                mark_safe(f"<i class='fas fa-times ex'></i><span>{food}</span>"))

    percent = recipies_model.RecipePercent.objects.get(
        user=request.user, recipe=recipe)

    return render(request, "recipies/recipe_detail.html", {"recipe": recipe, "result": result_foods, "percent": percent.percent})


def recipe_create(request):
    if request.method == 'POST':
        form = forms.RecipeCreateForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = forms.RecipeCreateForm()

    return render(request, 'recipies/recipe_form.html', {'form': form})
