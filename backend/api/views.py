import json

from django.core.handlers.wsgi import WSGIRequest
from django.http import HttpResponse

from api.models import Task


def createTask(request: WSGIRequest):
    # Can be created with forms also. However, because of the small size of the project, I am using this method.
    # Also, the better approach for this kind of projects is to use REST APIs like django rest framework.
    body = json.loads(request.body.decode("utf-8"))
    title = body.get('title')
    completed = False
    if title is None:
        return HttpResponse("Title is required.", status=400)
    try:
        Task.objects.create(title=title, completed=completed)
    except Exception as e:
        print(e)
        return HttpResponse("Task creation failed.", status=500)
    return HttpResponse("Task created", status=201)


def getAllTasks(request: WSGIRequest):
    tasks = [t for t in Task.objects.all().values()]
    return HttpResponse(json.dumps(tasks), status=200, content_type="application/json")


def changeTaskStatus(request: WSGIRequest, id: int):
    body = json.loads(request.body.decode("utf-8"))

    status = body.get('status')
    if status is None:
        return HttpResponse("Status is required.", status=400)
    try:
        task = Task.objects.get(id=id)
    except Exception as e:
        print(e)
        return HttpResponse("Task not found.", status=404)

    task.completed = status
    task.save()
    return HttpResponse("Task updated successfully.", status=200)
