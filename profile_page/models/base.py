from django.db import models
from django.utils import timezone
from django.db.models.query import QuerySet

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