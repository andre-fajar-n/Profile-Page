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