# Generated by Django 4.1.4 on 2023-01-08 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='/def.jpg', null=True, upload_to=''),
        ),
    ]
