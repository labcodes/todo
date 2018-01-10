import json

from django.test import TestCase
from django.urls import reverse


class SignUpViewTest(TestCase):

    def setUp(self):
        self.url = reverse('users:signup')

    def test_view_doesnt_require_authentication(self):
        response = self.client.post(self.url)
        self.assertEqual(response.status_code, 400)

    def test_view_returns_201(self):
        data = {'email': 'mail@mail.com', 'password': '1q2w3e4r5t'}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 201)

    def test_view_returns_authentication_token(self):
        data = {'email': 'mail@mail.com', 'password': '1q2w3e4r5t'}
        response = self.client.post(self.url, data)
        self.assertEqual(response.status_code, 201)
        content = json.loads(response.content.decode('utf-8'))
        self.assertIn('token', content)
        self.assertEqual(content['email'], 'mail@mail.com')
