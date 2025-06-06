class AssociationAdminMixin:
    """Mixin for ModelAdmin classes that handle associated_with fields"""
    def get_associated_with(self, obj):
        if obj.associated_with:
            return str(obj.associated_with)
        return "-"
    get_associated_with.short_description = "Associated With"