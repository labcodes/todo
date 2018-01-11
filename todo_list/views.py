from rest_framework.viewsets import ModelViewSet

from .models import Task, TodoList
from .serializers import TaskSerializer, TodoListSerializer


class TodoListViewSet(ModelViewSet):
    queryset = TodoList.objects.all()
    serializer_class = TodoListSerializer


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
