# Standard library
import logging
from datetime import datetime

# Django
from django.shortcuts import render
from django.contrib.auth.models import User
from django.db.models import Case, When, Value, BooleanField

# Local
from . import models, utils

logger = logging.getLogger(__name__)


def index(request):
    now = datetime.now(tz=utils.jkt_tz)

    data = {}

    # get about data
    try:
        about = models.About.objects.latest("created_at")
        data["about"] = about
        start_working = datetime(about.start_working.year,
                                 about.start_working.month, about.start_working.day, tzinfo=utils.jkt_tz)
        delta = now - start_working
        data["years_experience"] = int(delta.total_seconds()//(3600*24*365.25))
    except models.About.DoesNotExist:
        logger.warning("About data is empty")

    # get user data
    try:
        user = User.objects.first()  # Or use a specific filter like User.objects.get(username='admin')
        data["user"] = user
    except User.DoesNotExist:
        logger.warning("No user found")
        data["user"] = None

    # get skills data
    skills = models.Skill.objects.all()
    data["skills"] = skills

    # get experiences data - sort by is_current (desc) and start_date (desc)
    experiences = models.Experience.objects.order_by('-is_current', '-start_date')
    data["experiences"] = experiences

    # get education data - sort by is_current (desc) and start_date (desc)
    education = models.Education.objects.order_by('-is_current', '-start_date')
    data["education"] = education

    # get award data
    awards = models.Award.objects.order_by("-issue_date")
    data["awards"] = awards

    # get master data
    temp_master = models.ProjectCategory.objects.all()
    masters = []
    for val in temp_master:
        temp = val.name.replace("-", " ").title()
        masters.append({
            "title_name": temp,
            "original_name": val.name,
        })
    data["masters"] = masters

    # get projects with their associations - sort by is_current (desc) and start_date (desc)
    projects = models.Project.objects.order_by('-is_current', '-start_date')
    data["projects"] = projects

    return render(request, "index.html", data)
