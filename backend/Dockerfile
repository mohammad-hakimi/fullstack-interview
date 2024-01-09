FROM python:3.10.0
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY backend/ .

RUN pip install -r requirements.txt
RUN python manage.py migrate
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "--noreload", "0.0.0.0:8000"]