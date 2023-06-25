from django.db import models

# Create your models here.


class About(models.Model):
    fullname = models.CharField(max_length=100, null=False)
    nickname = models.CharField(max_length=20, null=False)
    job_position = models.CharField(null=False)
    cv_url = models.CharField()
    start_working = models.DateTimeField(null=False)
    summary = models.CharField()
    phone_number = models.CharField()
    address = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.fullname


class Skill(models.Model):
    name = models.CharField(null=False)
    image_url = models.CharField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class Experience(models.Model):
    position = models.CharField(null=False)
    company = models.CharField(null=False)
    description = models.CharField(null=False)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.position + ", " + self.company


class Education(models.Model):
    school = models.CharField(null=False)
    degree = models.CharField(null=False)
    field_of_study = models.CharField(null=False)
    description = models.CharField(null=False)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.degree + ", " + self.school


class Award(models.Model):
    title = models.CharField(null=False)
    issuer = models.CharField(null=False)
    issue_date = models.DateField(null=False)
    description = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.title


class MasterData(models.Model):
    name = models.CharField(null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name


class Project(models.Model):
    name = models.CharField(null=False)
    description = models.CharField(null=False)
    technology = models.CharField(null=False)
    tools = models.CharField(null=False)
    live_url = models.CharField(null=True)
    source_url = models.CharField(null=True)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True)
    ownership = models.ForeignKey(MasterData, on_delete=models.RESTRICT, null=False)
    topic1 = models.ForeignKey(MasterData, on_delete=models.RESTRICT, null=False)
    topic2 = models.ForeignKey(MasterData, on_delete=models.RESTRICT, null=False)
    topic3 = models.ForeignKey(MasterData, on_delete=models.RESTRICT, null=False)
    associated_with = models.ForeignKey(null=True, to=Experience, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.name
