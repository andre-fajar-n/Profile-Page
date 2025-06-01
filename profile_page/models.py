from django.db import models

# Create your models here.


class About(models.Model):
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
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.fullname


class Skill(models.Model):
    name = models.CharField(max_length=100, null=False)
    image_url = models.CharField(max_length=1000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class Experience(models.Model):
    position = models.CharField(max_length=50, null=False)
    company = models.CharField(max_length=50, null=False)
    company_site = models.URLField(null=True, blank=True)
    description = models.TextField(null=False)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.position + ", " + self.company


class Education(models.Model):
    school = models.CharField(max_length=255, null=False)
    school_site = models.URLField(null=True, blank=True)
    degree = models.CharField(max_length=50, null=False)
    field_of_study = models.CharField(max_length=50, null=False)
    description = models.TextField(null=False)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.degree + ", " + self.school


class Award(models.Model):
    title = models.CharField(max_length=255, null=False)
    issuer = models.CharField(max_length=255, null=False)
    issue_date = models.DateField(null=False)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.title


class ProjectCategory(models.Model):
    name = models.CharField(max_length=50, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    technology = models.CharField(max_length=100, null=False)
    tools = models.CharField(max_length=100, null=False)
    live_url = models.URLField(null=True)
    source_url = models.URLField(null=True)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True)
    ownership = models.ForeignKey(
        ProjectCategory, on_delete=models.RESTRICT, null=False, related_name="fk_master_data_ownership")
    topic1 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=False, related_name="fk_master_data_topic1")
    topic2 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic2")
    topic3 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic3")
    associated_with = models.ForeignKey(
        null=True, blank=True, to=Experience, on_delete=models.CASCADE, related_name="fk_associated_with")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name
