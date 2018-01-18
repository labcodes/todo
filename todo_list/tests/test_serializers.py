from django.test import TestCase
from model_mommy import mommy

from todo_list.models import TodoList
from todo_list.serializers import TodoListSerializer


class UserSerializerTest(TestCase):

    def test_serializer_returns_correct_data(self):
        todo = mommy.make(TodoList)
        serializer = TodoListSerializer(instance=todo)
        self.assertEqual(serializer.data, {'name': todo.name, 'id': todo.id})

    def test_serializer_creates_instance_correctly(self):
        data = {'name': 'Do something'}
        serializer = TodoListSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        todo = serializer.save()
        self.assertEqual(TodoList.objects.latest('id'), todo)

    def test_serializer_updates_instance_correctly(self):
        data = {'name': 'Do something'}
        todo = mommy.make(TodoList)
        serializer = TodoListSerializer(data=data, instance=todo)
        self.assertTrue(serializer.is_valid())
        serializer.save()
        todo.refresh_from_db()
        self.assertEqual(todo.name, data['name'])
