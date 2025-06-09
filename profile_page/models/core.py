from django.db import models
from .base import BaseModel
from .mixins import AssociationMixin, TimelineMixin

class About(BaseModel):
    fullname = models.CharField(max_length=100, null=False)
    nickname = models.CharField(max_length=20, null=False)
    job_position = models.CharField(max_length=50, null=False)
    cv_url = models.CharField(max_length=255)
    start_working = models.DateField(null=False)
    summary = models.TextField()
    phone_number = models.CharField(max_length=20)
    address = models.CharField(max_length=255)
    facebook_username = models.CharField(max_length=20, default='')
    github_username = models.CharField(max_length=20, default='')
    linkedin_username = models.CharField(max_length=20, default='')
    instagram_username = models.CharField(max_length=20, default='')

    def __str__(self) -> str:
        return self.fullname

class Skill(BaseModel):
    name = models.CharField(max_length=100, null=False)
    image_url = models.CharField(max_length=1000, null=True, blank=True)

    def __str__(self) -> str:
        return self.name

class Experience(BaseModel, TimelineMixin):
    position = models.CharField(max_length=50, null=False)
    company = models.CharField(max_length=50, null=False)
    company_site = models.URLField(null=True, blank=True)
    company_logo = models.URLField(null=True, blank=True, help_text="URL to company logo image")
    description = models.TextField(null=False)
    location = models.CharField(max_length=100, null=True, blank=True, help_text="Job location (e.g., 'Remote', 'New York, NY')")
    
    def __str__(self) -> str:
        return self.position + ", " + self.company

class Education(BaseModel, TimelineMixin):
    school = models.CharField(max_length=255, null=False)
    school_site = models.URLField(null=True, blank=True)
    school_logo = models.URLField(null=True, blank=True, help_text="URL to school logo image")
    degree = models.CharField(max_length=50, null=False)
    field_of_study = models.CharField(max_length=50, null=False)
    description = models.TextField(null=False)
    location = models.CharField(max_length=100, null=True, blank=True, help_text="School location")

    def __str__(self) -> str:
        return self.degree + ", " + self.school

class Award(BaseModel, AssociationMixin):
    title = models.CharField(max_length=255, null=False)
    issuer = models.CharField(max_length=255, null=False)
    issue_date = models.DateField(null=False)
    description = models.TextField()

    def __str__(self) -> str:
        return self.title

class ProjectCategory(BaseModel):
    name = models.CharField(max_length=50, null=False)

    def __str__(self) -> str:
        return self.name

class Project(BaseModel, AssociationMixin, TimelineMixin):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    technology = models.CharField(max_length=100, null=False)
    tools = models.CharField(max_length=100, null=False)
    live_url = models.URLField(null=True, blank=True)
    source_url = models.URLField(null=True, blank=True)
    ownership = models.ForeignKey(
        ProjectCategory, on_delete=models.RESTRICT, null=True, blank=True, related_name="fk_master_data_ownership")
    topic1 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic1")
    topic2 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic2")
    topic3 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic3")

    def __str__(self) -> str:
        return self.name
