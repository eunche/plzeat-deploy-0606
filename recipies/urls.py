from django.urls import path
from . import views

app_name = "recipies"

urlpatterns = [
    path("list/<int:pk>/", views.recipe_list, name="recipe_list"),
    path("detail/<int:pk>/", views.recipe_detail, name="recipe_detail"),
    path("create/", views.recipe_create, name="register"),
    path("update/<int:pk>/", views.recipe_update, name="update"),
    path("mylist/<int:pk>/", views.my_recipe, name="mylist"),
    path("worldcup/", views.recipe_worldcup, name="worldcup"),
    path("delete/<int:pk>/", views.recipe_delete, name="delete"),
]
