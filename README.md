# Profile Page

A modern, responsive personal portfolio website built with Django. This project showcases professional experience, skills, education, awards, and projects in an elegant and interactive layout.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dynamic Content**: All content is database-driven and easily manageable through Django admin
- **Section-Based Layout**:
  - About Me
  - Skills & Expertise
  - Work Experience
  - Education
  - Awards & Achievements
  - Projects Portfolio
  - Contact Information
- **Interactive Elements**: Animations, typed text effect, filterable project portfolio
- **Modern UI**: Clean design with customizable color scheme

## Technology Stack

- **Backend**: Django 4.2
- **Frontend**: HTML5, CSS3, JavaScript
- **Database**: PostgreSQL
- **CSS Framework**: Bootstrap 5
- **JS Libraries**: jQuery, Typed.js, WOW.js, Isotope, Owl Carousel
- **Deployment**: Railway.app

## Getting Started

### Prerequisites

- Python 3.11+
- PostgreSQL
- pip

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/profile-page.git
   cd profile-page
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the project root with the following variables:
   ```
   SECRET_KEY=your_secret_key
   DEBUG_MODE=True
   DB_NAME=your_db_name
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=localhost
   DB_PORT=5432
   ```

5. Run migrations:
   ```bash
   make migrate-up
   ```

6. Start the development server:
   ```bash
   make run
   ```

7. Access the site at http://localhost:8000

### Database Setup

To create a new migration file after model changes:
```bash
make update-migration-file
```

To apply migrations:
```bash
make migrate-up
```

To clean up migration files (except `__init__.py`):
```bash
make cleanup-migration-file
```

## Project Structure

```
profile-page/
├── manage.py                  # Django management script
├── requirements.txt           # Python dependencies
├── Makefile                   # Utility commands
├── vercel_app/                # Main Django project
│   ├── settings.py            # Project settings
│   ├── urls.py                # URL routing
│   └── wsgi.py                # WSGI configuration
└── profile_page/              # Main application
    ├── admin.py               # Admin interface configuration
    ├── models.py              # Database models
    ├── views.py               # View functions
    ├── urls.py                # URL patterns
    ├── migrations/            # Database migrations
    ├── static/                # Static assets
    │   ├── css/               # CSS files
    │   │   ├── components/    # Component-specific styles
    │   │   └── style.css      # Main stylesheet
    │   ├── js/                # JavaScript files
    │   ├── img/               # Images
    │   └── lib/               # Third-party libraries
    └── templates/             # HTML templates
        ├── component/         # Reusable template components
        └── index.html         # Main template
```

## Deployment

This project is configured for deployment on Railway.app:

1. Push your code to a GitHub repository
2. Connect your repository to Railway
3. Railway will automatically build and deploy your application
4. Set up the required environment variables in Railway dashboard

## Customization

### Changing Colors

The color scheme can be customized by modifying the CSS variables in `static/css/style.css`:

```css
:root {
    --primary: #4361ee;    /* Modern blue */
    --secondary: #ff9e00;  /* Warm orange */
    --accent: #4cc9f0;     /* Light blue accent */
    --light: #f8f9fa;      /* Lighter background */
    --dark: #212529;       /* Darker text */
    --gray: #6c757d;       /* Neutral gray */
    --border-radius: 8px;  /* Consistent rounded corners */
}
```

### Adding Content

All content can be managed through the Django admin interface:

1. Create a superuser: `python manage.py createsuperuser`
2. Access the admin panel at http://localhost:8000/admin
3. Add or edit content in the respective sections

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- [Typed.js](https://github.com/mattboldt/typed.js/)
- [WOW.js](https://wowjs.uk/)
- [Isotope](https://isotope.metafizzy.co/)
