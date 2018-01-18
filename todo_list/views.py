from rest_framework.viewsets import ModelViewSet

from .models import TodoList
from .serializers import TodoListSerializer


class TodoListViewSet(ModelViewSet):
    queryset = TodoList.objects.all()
    serializer_class = TodoListSerializer
