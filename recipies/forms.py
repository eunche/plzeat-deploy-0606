from django import forms
from . import models


class RecipeCreateForm(forms.ModelForm):
    class Meta:
        model = models.Recipe
        field = "__all__"
