from django.db import models
from django.utils import timezone
from django.db.models.query import QuerySet

# Create your models here.

class SoftDeleteManager(models.Manager):
    """Manager that excludes records marked as deleted"""
    def get_queryset(self):
        return super().get_queryset().filter(deleted_at__isnull=True)

class SoftDeleteQuerySet(QuerySet):
    """QuerySet with soft delete methods"""
    def delete(self):
        """Soft delete all records in the queryset"""
        return self.update(deleted_at=timezone.now())
    
    def hard_delete(self):
        """Permanently delete all records in the queryset"""
        return super().delete()
    
    def restore(self):
        """Restore all soft-deleted records in the queryset"""
        return self.update(deleted_at=None)

class BaseModel(models.Model):
    """Abstract base model with common fields and methods"""
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True, blank=True)
    deleted_at = models.DateTimeField(null=True, blank=True)
    
    # Managers
    objects = SoftDeleteManager.from_queryset(SoftDeleteQuerySet)()
    all_objects = models.Manager.from_queryset(SoftDeleteQuerySet)()  # Includes deleted objects
    
    class Meta:
        abstract = True
        
    def save(self, *args, **kwargs):
        if self.pk:  # If the object already exists (update operation)
            self.updated_at = timezone.now()
        super().save(*args, **kwargs)
    
    def delete(self, hard=False, *args, **kwargs):
        """Soft delete the record unless hard=True is specified"""
        if hard:
            return super().delete(*args, **kwargs)
        
        self.deleted_at = timezone.now()
        self.save()
        
    def restore(self):
        """Restore a soft-deleted record"""
        self.deleted_at = None
        self.save()


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
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.fullname

class Skill(BaseModel):
    name = models.CharField(max_length=100, null=False)
    image_url = models.CharField(max_length=1000, null=True, blank=True)

    def __str__(self) -> str:
        return self.name

class Experience(BaseModel):
    position = models.CharField(max_length=50, null=False)
    company = models.CharField(max_length=50, null=False)
    company_site = models.URLField(null=True, blank=True)
    description = models.TextField(null=False)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True, blank=True)

    def __str__(self) -> str:
        return self.position + ", " + self.company

class Education(BaseModel):
    school = models.CharField(max_length=255, null=False)
    school_site = models.URLField(null=True, blank=True)
    degree = models.CharField(max_length=50, null=False)
    field_of_study = models.CharField(max_length=50, null=False)
    description = models.TextField(null=False)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True, blank=True)

    def __str__(self) -> str:
        return self.degree + ", " + self.school

class Award(BaseModel):
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

class Project(BaseModel):
    name = models.CharField(max_length=255, null=False)
    description = models.TextField(null=False)
    technology = models.CharField(max_length=100, null=False)
    tools = models.CharField(max_length=100, null=False)
    live_url = models.URLField(null=True)
    source_url = models.URLField(null=True)
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True, blank=True)
    ownership = models.ForeignKey(
        ProjectCategory, on_delete=models.RESTRICT, null=True, blank=True, related_name="fk_master_data_ownership")
    topic1 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic1")
    topic2 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic2")
    topic3 = models.ForeignKey(ProjectCategory, on_delete=models.RESTRICT,
                               null=True, blank=True, related_name="fk_master_data_topic3")
    associated_with = models.ForeignKey(
        null=True, blank=True, to=Experience, on_delete=models.CASCADE, related_name="fk_associated_with")

    def __str__(self) -> str:
        return self.name
