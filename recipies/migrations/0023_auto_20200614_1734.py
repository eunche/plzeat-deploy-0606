# Generated by Django 3.0.7 on 2020-06-14 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipies', '0022_auto_20200614_1710'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='create_time',
            field=models.DateField(auto_now=True),
        ),
    ]