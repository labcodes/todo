from django.test import TestCase
from django.urls import reverse
from django.utils import timezone

from model_mommy import mommy

from todo_list.serializers import TaskSerializer, TodoListSerializer
from utils.api_test_case import APITestCaseMixin


class TodoListViewSetTest(TestCase, APITestCaseMixin):

    def setUp(self):
        self.setup_client()

        self.todo = mommy.make('todo_list.TodoList')
        self.list_url = reverse(
            'todo_list:todo_list-list',
            kwargs={'version': 'v1.0'}
        )
        self.detail_url = reverse(
            'todo_list:todo_list-detail',
            kwargs={'version': 'v1.0', 'pk': self.todo.pk}
        )
        self.data = self.post_data = TodoListSerializer(instance=self.todo).data


class TasktViewSetTest(TestCase, APITestCaseMixin):

    def setUp(self):
        self.setup_client()

        self.task = mommy.make('todo_list.Task', due_date=timezone.now().date())
        self.list_url = reverse('todo_list:task-list')
        self.detail_url = reverse('todo_list:task-detail', args=[self.task.pk])
        self.data = self.post_data = TaskSerializer(instance=self.task).data
