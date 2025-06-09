from django.db import models
from django.core.exceptions import ValidationError

class AssociationMixin(models.Model):
    """Mixin for models that can be associated with Experience or Education"""
    associated_with_id = models.PositiveIntegerField(null=True, blank=True)
    associated_with_type = models.CharField(max_length=20, null=True, blank=True, 
                                           choices=[('experience', 'Experience'), ('education', 'Education')])
    
    class Meta:
        abstract = True
    
    @property
    def associated_with(self):
        """Get the associated Experience or Education object"""
        if not self.associated_with_id or not self.associated_with_type:
            return None
            
        # Import here to avoid circular imports
        from .core import Experience, Education
            
        if self.associated_with_type == 'experience':
            return Experience.objects.filter(id=self.associated_with_id).first()
        elif self.associated_with_type == 'education':
            return Education.objects.filter(id=self.associated_with_id).first()
        return None

    def clean(self):
        super().clean()
        # Validate that the referenced object exists
        if self.associated_with_id and self.associated_with_type:
            # Import here to avoid circular imports
            from .core import Experience, Education
            
            if self.associated_with_type == 'experience':
                if not Experience.objects.filter(id=self.associated_with_id).exists():
                    raise ValidationError({'associated_with_id': 'Referenced Experience does not exist'})
            elif self.associated_with_type == 'education':
                if not Education.objects.filter(id=self.associated_with_id).exists():
                    raise ValidationError({'associated_with_id': 'Referenced Education does not exist'})

class TimelineMixin(models.Model):
    """Mixin for models with start_date, end_date, and is_current fields"""
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False, help_text="Check if this is current")
    
    class Meta:
        abstract = True
        ordering = ['-is_current', '-end_date', '-start_date']
    
    def save(self, *args, **kwargs):
        # Automatically set is_current based on end_date
        if self.end_date is None:
            self.is_current = True
        else:
            self.is_current = False
        super().save(*args, **kwargs)
