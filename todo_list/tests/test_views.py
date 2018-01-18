from django.test import TestCase
from django.urls import reverse
from django.utils import timezone

from model_mommy import mommy

from todo_list.serializers import TaskSerializer, TodoListSerializer
from utils.api_test_case import APITestCaseMixin


class TodoListViewSetTest(TestCase, APITestCaseMixin):

    def setUp(self):
        self.setup_client()

        todo = mommy.make('todo_list.TodoList')
        self.list_url = reverse(
            'todo_list:todo_lists-list',
            kwargs={'version': 'v1.0'}
        )
        self.detail_url = reverse(
            'todo_list:todo_lists-detail',
            kwargs={'version': 'v1.0', 'pk': todo.pk}
        )
        self.data = self.post_data = TodoListSerializer(instance=todo).data


class TasktViewSetTest(TestCase, APITestCaseMixin):

    def setUp(self):
        self.setup_client()

        task = mommy.make('todo_list.Task', due_date=timezone.now().date())
        self.list_url = reverse(
            'todo_list:tasks-list',
            kwargs={'version': 'v1.0'}
        )
        self.detail_url = reverse(
            'todo_list:tasks-detail',
            kwargs={'version': 'v1.0', 'pk': task.pk}
        )
        self.data = self.post_data = TaskSerializer(instance=task).data
