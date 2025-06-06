from django.apps import AppConfig


class ProfilePageConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'profile_page'
    verbose_name = 'Profile Page'

    def ready(self):
        """
        Perform initialization tasks when the app is ready.
        This is called once when the app is started.
        """
        # Import signals or perform other initialization tasks here
        pass
