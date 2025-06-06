from django import forms
from ..models import Experience, Education, Project, Award

# Custom form field for combined Experience/Education selection
class CombinedModelChoiceField(forms.ChoiceField):
    def __init__(self, *args, **kwargs):
        # Get all experiences and educations
        experiences = Experience.objects.all()
        educations = Education.objects.all()
        
        # Create choices with group labels
        choices = [('', '---------')]
        
        if experiences.exists():
            exp_choices = [(f'experience-{exp.id}', f'{exp.position} at {exp.company}') for exp in experiences]
            choices.append(('Experiences', exp_choices))
        
        if educations.exists():
            edu_choices = [(f'education-{edu.id}', f'{edu.degree} at {edu.school}') for edu in educations]
            choices.append(('Educations', edu_choices))
        
        kwargs['choices'] = choices
        super().__init__(*args, **kwargs)

class AssociationAdminFormMixin:
    """Mixin for admin forms that handle associated_with fields"""
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        
        # Add the combined field if the model has associated_with fields
        if 'associated_with_id' in self.fields and 'associated_with_type' in self.fields:
            self.fields['associated_with'] = CombinedModelChoiceField(
                required=False,
                label="Associated With"
            )
            
            # Hide the original fields
            self.fields['associated_with_id'].widget = forms.HiddenInput()
            self.fields['associated_with_type'].widget = forms.HiddenInput()
            
            # If we're editing an existing object, set the initial value for associated_with
            if self.instance and self.instance.pk:
                if self.instance.associated_with_type and self.instance.associated_with_id:
                    self.fields['associated_with'].initial = f'{self.instance.associated_with_type}-{self.instance.associated_with_id}'
    
    def clean(self):
        cleaned_data = super().clean()
        
        # Process the associated_with field if it exists
        if 'associated_with' in self.fields:
            associated_with = cleaned_data.get('associated_with')
            
            if associated_with:
                # Parse the combined value to get model and ID
                model_name, object_id = associated_with.split('-')
                
                # Set the associated_with_type and associated_with_id
                cleaned_data['associated_with_type'] = model_name
                cleaned_data['associated_with_id'] = int(object_id)
            else:
                # Clear the fields if nothing is selected
                cleaned_data['associated_with_type'] = None
                cleaned_data['associated_with_id'] = None
        
        return cleaned_data

class ProjectAdminForm(AssociationAdminFormMixin, forms.ModelForm):
    """Custom form for Project with a combined dropdown for associated_with"""
    class Meta:
        model = Project
        fields = '__all__'

class AwardAdminForm(AssociationAdminFormMixin, forms.ModelForm):
    """Custom form for Award with a combined dropdown for associated_with"""
    class Meta:
        model = Award
        fields = '__all__'