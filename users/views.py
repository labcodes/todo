from rest_framework.generics import CreateAPIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED

from utils.authentication import generate_token
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
        data['token'] = generate_token(serializer.instance)
        return Response(data=data, status=HTTP_201_CREATED, headers=headers)
