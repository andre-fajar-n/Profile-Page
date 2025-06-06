from django.contrib import admin
from django import forms
from .models import About, Skill, Experience, Award, Education, ProjectCategory, Project

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

class AssociationAdminMixin:
    """Mixin for ModelAdmin classes that handle associated_with fields"""
    def get_associated_with(self, obj):
        if obj.associated_with:
            return str(obj.associated_with)
        return "-"
    get_associated_with.short_description = "Associated With"

class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        'position',
        'company',
        'company_site',
        'description',
        'start_date',
        'end_date',
        'created_at',
        'updated_at',
        'deleted_at',
    )

admin.site.register(Experience, ExperienceAdmin)

class EducationAdmin(admin.ModelAdmin):
    list_display = (
        'school',
        'school_site',
        'degree',
        'field_of_study',
        'description',
        'start_date',
        'end_date',
        'created_at',
        'updated_at',
        'deleted_at',
    )

admin.site.register(Education, EducationAdmin)

class ProjectAdmin(AssociationAdminMixin, admin.ModelAdmin):
    form = ProjectAdminForm
    list_display = (
        'name',
        'description',
        'technology',
        'tools',
        'live_url',
        'source_url',
        'start_date',
        'end_date',
        'ownership',
        'topic1',
        'topic2',
        'topic3',
        'get_associated_with',
        'created_at',
        'updated_at',
        'deleted_at',
    )

admin.site.register(Project, ProjectAdmin)

class AwardAdmin(AssociationAdminMixin, admin.ModelAdmin):
    form = AwardAdminForm
    list_display = (
        'title',
        'issuer',
        'issue_date',
        'description',
        'get_associated_with',
        'created_at',
        'updated_at',
        'deleted_at',
    )

admin.site.register(Award, AwardAdmin)

class AboutAdmin(admin.ModelAdmin):
    list_display = (
        'fullname',
        'nickname',
        'job_position',
        'cv_url',
        'start_working',
        'summary',
        'phone_number',
        'address',
        'facebook_username',
        'github_username',
        'linkedin_username',
        'instagram_username',
        'created_at',
    )

admin.site.register(About, AboutAdmin)

class SkillAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'image_url',
        'created_at',
        'updated_at',
        'deleted_at',
    )

admin.site.register(Skill, SkillAdmin)

class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at', 'deleted_at')

admin.site.register(ProjectCategory, ProjectCategoryAdmin)


