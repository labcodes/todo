from django.test import TestCase
from django.urls import reverse

from model_mommy import mommy

from todo_list.serializers import TodoListSerializer
from utils.api_test_case import APITestCaseMixin


class TodoListViewSetTest(TestCase, APITestCaseMixin):

    def setUp(self):
        self.setup_client()
        
        self.todo = mommy.make('todo_list.TodoList')
        self.list_url = reverse('todo_list:todo_list-list')
        self.detail_url = reverse('todo_list:todo_list-detail', args=[self.todo.pk])
        self.data = self.post_data = TodoListSerializer(instance=self.todo).data
