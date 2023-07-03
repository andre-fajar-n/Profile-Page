# Generated by Django 4.2.2 on 2023-07-03 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile_page', '0003_alter_skill_image_url_alter_skill_updated_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='company_site',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='experience',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]