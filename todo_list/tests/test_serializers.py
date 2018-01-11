from django.test import TestCase
from django.utils import timezone

from model_mommy import mommy

from todo_list.models import Task, TodoList
from todo_list.serializers import TaskSerializer, TodoListSerializer


class TodoListSerializerTest(TestCase):

    def test_serializer_returns_correct_data(self):
        todo = mommy.make(TodoList)
        serializer = TodoListSerializer(instance=todo)
        self.assertEqual(serializer.data, {'name': todo.name})

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


class TaskSerializerTest(TestCase):

    def setUp(self):
        self.date = timezone.now().date()
        self.todo = mommy.make('todo_list.TodoList')
        self.owner = mommy.make('users.User')
        self.data = {
            'name': 'Do something',
            'todo_list': self.todo.id,
            'due_date': self.date.isoformat(),
            'owner': self.owner.id,
        }

    def test_serializer_returns_correct_data(self):
        task = mommy.make(Task, due_date=self.date)
        serializer = TaskSerializer(instance=task)
        data = {
            'name': task.name,
            'todo_list': task.todo_list.id,
            'due_date': self.date.isoformat(),
            'owner': task.owner.id,
        }
        self.assertEqual(serializer.data, data)

    def test_serializer_creates_instance_correctly(self):
        serializer = TaskSerializer(data=self.data)
        self.assertTrue(serializer.is_valid())
        task = serializer.save()
        self.assertEqual(Task.objects.latest('id'), task)

    def test_serializer_updates_instance_correctly(self):
        task = mommy.make(Task)
        serializer = TaskSerializer(data=self.data, instance=task)
        self.assertTrue(serializer.is_valid())
        serializer.save()
        task.refresh_from_db()
        self.assertEqual(task.name, self.data['name'])
        self.assertEqual(task.due_date.isoformat(), self.data['due_date'])
        self.assertEqual(task.todo_list.id, self.data['todo_list'])
        self.assertEqual(task.owner.id, self.data['owner'])
