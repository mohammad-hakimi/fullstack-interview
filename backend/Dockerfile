FROM python:3.10.0

WORKDIR /app
COPY backend/ .

RUN pip install -r requirements.txt
RUN python manage.py migrate
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "--noreload"]