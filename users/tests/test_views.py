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
