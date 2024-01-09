from django.urls import path

from api import views

urlpatterns = [
    path('create-task/', views.createTask, name='create-task'),
    path('tasks/', views.getAllTasks, name='get-all-tasks'),
    path('task/<int:id>/status/', views.changeTaskStatus, name='change-task-status'),
]
