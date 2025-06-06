from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from .models import About, Skill, Experience, Award, Education, ProjectCategory, Project, ProjectAssociation

# Register your models here.

class ProjectAssociationInline(GenericTabularInline):
    model = ProjectAssociation
    extra = 1

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
    inlines = [ProjectAssociationInline]

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
    inlines = [ProjectAssociationInline]

admin.site.register(Education, EducationAdmin)

class ProjectAssociationInline(admin.TabularInline):
    model = ProjectAssociation
    extra = 1
    fields = ('content_type', 'object_id')

class ProjectAdmin(admin.ModelAdmin):
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
        'created_at',
        'updated_at',
        'deleted_at',
    )
    inlines = [ProjectAssociationInline]

admin.site.register(Project, ProjectAdmin)

# Register other models
admin.site.register(About)
admin.site.register(Skill)
admin.site.register(Award)
admin.site.register(ProjectCategory)
admin.site.register(ProjectAssociation)
