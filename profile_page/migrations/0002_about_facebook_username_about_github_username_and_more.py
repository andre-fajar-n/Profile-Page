# Generated by Django 4.2.2 on 2023-07-01 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile_page', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='facebook_username',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='about',
            name='github_username',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='about',
            name='instagram_username',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='about',
            name='linkedin_username',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AlterField(
            model_name='about',
            name='start_working',
            field=models.DateField(),
        ),
    ]