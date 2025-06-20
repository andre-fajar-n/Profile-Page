# Generated by Django 4.2.3 on 2025-06-10 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profile_page', '0013_project_is_current'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='work_arrangement',
            field=models.CharField(blank=True, choices=[('remote', 'Remote'), ('onsite', 'Onsite'), ('hybrid', 'Hybrid')], help_text='Type of work arrangement (Remote, Onsite, or Hybrid)', max_length=20, null=True),
        ),
    ]
