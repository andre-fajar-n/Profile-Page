# Models Structure

This directory contains the Django models for the profile_page application, organized in a modular structure.

## Files

- `__init__.py`: Exports all models for easy importing
- `base.py`: Contains base models and managers (BaseModel, SoftDeleteManager, SoftDeleteQuerySet)
- `mixins.py`: Contains reusable model mixins (AssociationMixin)
- `core.py`: Contains the core application models

## Usage

To use these models in your code, import them from the profile_page.models package:

```python
from profile_page.models import About, Experience, Education, Project, Award
```

## Adding New Models

When adding new models:

1. Add the model class to the appropriate file (usually `core.py` or create a new file)
2. Import and export the model in `__init__.py`
3. Create migrations using `make update-migration-file`
4. Apply migrations using `make migrate-up`

## Best Practices

- Keep models focused and single-purpose
- Use mixins for shared functionality
- Inherit from BaseModel for common fields and methods
- Use descriptive names for models and fields
- Add docstrings to explain model purpose and behavior