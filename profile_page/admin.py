from django.contrib import admin
from .models import About, Skill, Experience, Award, Education, MasterData, Project

# Register your models here.


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


class AwardAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'issuer',
        'issue_date',
        'description',
        'created_at',
        'updated_at',
        'deleted_at',
    )


admin.site.register(Award, AwardAdmin)


class MasterDataAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at', 'deleted_at')


admin.site.register(MasterData, MasterDataAdmin)


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'technology', 'tools', 'live_url', 'source_url', 'start_date', 'end_date',
                    'ownership', 'topic1', 'topic2', 'topic3', 'associated_with', 'created_at', 'updated_at', 'deleted_at')


admin.site.register(Project, ProjectAdmin)
