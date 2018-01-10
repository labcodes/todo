from rest_framework.generics import CreateAPIView
from rest_framework import permissions

from .serializers import UserSerializer


class SignUpView(CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer
