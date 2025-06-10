from django.contrib import admin
from ..models import (
    About, Skill, Experience, Education, 
    Award, ProjectCategory, Project
)
from .forms import ProjectAdminForm, AwardAdminForm
from .mixins import AssociationAdminMixin

class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        'position',
        'company',
        'location',
        'work_arrangement',
        'is_current',
        'start_date',
        'end_date',
        'created_at',
        'updated_at',
    )
    list_filter = ('is_current', 'company', 'work_arrangement')
    search_fields = ('position', 'company', 'description', 'location')
    fieldsets = (
        ('Job Information', {
            'fields': ('position', 'company', 'company_site', 'company_logo', 'location', 'work_arrangement')
        }),
        ('Timeline', {
            'fields': ('start_date', 'end_date', 'is_current')
        }),
        ('Details', {
            'fields': ('description',)
        }),
    )

admin.site.register(Experience, ExperienceAdmin)

class EducationAdmin(admin.ModelAdmin):
    list_display = (
        'school',
        'degree',
        'field_of_study',
        'location',
        'is_current',
        'start_date',
        'end_date',
        'created_at',
        'updated_at',
    )
    list_filter = ('is_current', 'school', 'degree')
    search_fields = ('school', 'degree', 'field_of_study', 'description', 'location')
    fieldsets = (
        ('School Information', {
            'fields': ('school', 'school_site', 'school_logo', 'location')
        }),
        ('Degree Information', {
            'fields': ('degree', 'field_of_study')
        }),
        ('Timeline', {
            'fields': ('start_date', 'end_date', 'is_current')
        }),
        ('Details', {
            'fields': ('description',)
        }),
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
        'is_current',
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
