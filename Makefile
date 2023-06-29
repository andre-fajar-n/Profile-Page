make-migrations:
	python manage.py makemigrations profile_page

migrate-up:
	python manage.py migrate

cleanup-migration-file:
	find ./profile_page/migrations -mindepth 1 -name __init__.py -prune -o -exec rm -rf {} +

run:
	python manage.py runserver

migrate-and-run: migrate-up run
