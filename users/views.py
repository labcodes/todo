from rest_framework.generics import CreateAPIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED

from rest_framework_jwt.settings import api_settings

from .serializers import UserSerializer


class SignUpView(CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        data = serializer.data.copy()
        data['token'] = self.generate_token(serializer.instance)
        return Response(data=data, status=HTTP_201_CREATED, headers=headers)

    def generate_token(self, user):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(user)
        return jwt_encode_handler(payload)
