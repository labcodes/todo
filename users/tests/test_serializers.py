from django.contrib.auth import authenticate
from django.test import TestCase
from model_mommy import mommy

from users.models import User
from users.serializers import UserSerializer


class UserSerializerTest(TestCase):

    def test_serializer_returns_correct_data(self):
        user = mommy.make(User)
        serializer = UserSerializer(instance=user)
        self.assertEqual(
            serializer.data,
            {'email': user.email, 'name': user.name}
        )

    def test_serializer_creates_user_correctly(self):
        data = {'email': 'mail@mail.com', 'password': '1q2w3e4r5t', 'name': 'Name'}
        serializer = UserSerializer(data=data)
        self.assertTrue(serializer.is_valid())
        user = serializer.save()
        self.assertEqual(user.email, data['email'])
        self.assertEqual(user.name, data['name'])
        self.assertNotEqual(user.password, data['password'])
        self.assertIsInstance(
            authenticate(username=data['email'], password=data['password']),
            User
        )
