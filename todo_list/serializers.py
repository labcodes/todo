from rest_framework import serializers

from .models import Task, TodoList


class TodoListSerializer(serializers.ModelSerializer):

    class Meta:
        model = TodoList
        fields = ['id', 'name']


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ['id', 'name', 'todo_list', 'due_date', 'owner']
