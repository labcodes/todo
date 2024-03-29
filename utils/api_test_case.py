import json

from model_mommy import mommy

from rest_framework.status import (
    HTTP_401_UNAUTHORIZED, HTTP_200_OK, HTTP_201_CREATED, HTTP_204_NO_CONTENT
)
from rest_framework.test import APIClient

from utils.authentication import generate_token


class APITestCaseMixin(object):

    def setup_client(self):
        self.api_client = APIClient()
        self.user = mommy.make('users.User')
        self.api_client.credentials(
            HTTP_AUTHORIZATION='JWT %s' % generate_token(self.user)
        )

    def test_list_authentication_required(self):
        self.api_client.credentials()
        response = self.api_client.get(self.list_url)
        self.assertEqual(response.status_code, HTTP_401_UNAUTHORIZED)

    def test_detail_authentication_required(self):
        self.api_client.credentials()
        response = self.api_client.get(self.detail_url)
        self.assertEqual(response.status_code, HTTP_401_UNAUTHORIZED)

    def test_list_returns_200(self):
        response = self.api_client.get(self.list_url)
        self.assertEqual(response.status_code, HTTP_200_OK)

    def test_detail_returns_200(self):
        response = self.api_client.get(self.detail_url)
        self.assertEqual(response.status_code, HTTP_200_OK)

    def test_detail_returns_correct_data(self):
        response = self.api_client.get(self.detail_url)
        content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(content, self.data)

    def test_list_returns_correct_data(self):
        response = self.api_client.get(self.list_url)
        content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(content, [self.data])

    def test_create_returns_201(self):
        response = self.api_client.post(self.list_url, self.post_data)
        self.assertEqual(response.status_code, HTTP_201_CREATED)

    def test_update_returns_200(self):
        response = self.api_client.put(self.detail_url, self.post_data)
        self.assertEqual(response.status_code, HTTP_200_OK)

    def test_delete_returns_204(self):
        response = self.api_client.delete(self.detail_url)
        self.assertEqual(response.status_code, HTTP_204_NO_CONTENT)
