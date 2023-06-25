# profile_page/urls.py
from django.urls import path

from profile_page.views import index


urlpatterns = [
    path('', index),
]