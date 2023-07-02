# example/views.py
from django.shortcuts import render
from . import models, utils
from datetime import datetime
from django.contrib.auth.models import User


def index(request):
    now = datetime.now(tz=utils.jkt_tz)

    # get about data
    about = models.About.objects.latest("created_at")
    start_working = datetime(about.start_working.year,
                             about.start_working.month, about.start_working.day, tzinfo=utils.jkt_tz)
    delta = now - start_working

    # get user data
    user = User.objects.get()

    # get skills data
    skills = models.Skill.objects.all()

    data = {
        "about": about,
        "years_experience": int(delta.total_seconds()//(3600*24*365.25)),
        "user": user,
        "skills": skills,
    }

    return render(request, "index.html", data)
