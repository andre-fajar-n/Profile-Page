# example/views.py
from django.shortcuts import render
from . import models, utils
from datetime import datetime
from django.contrib.auth.models import User


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
    except:
        print("About data is empty")

    # get user data
    user = User.objects.get()
    data["user"] = user

    # get skills data
    skills = models.Skill.objects.all()
    data["skills"] = skills

    # get experiences data
    experiences = models.Experience.objects.order_by('-end_date')
    data["experiences"] = experiences

    # get education data
    education = models.Education.objects.order_by("-end_date")
    data["education"] = education

    return render(request, "index.html", data)
