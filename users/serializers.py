from rest_framework.serializers import ModelSerializer

from .models import User


class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('email', 'name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(email=validated_data['email'], name=validated_data['name'])
        user.set_password(validated_data['password'])
        user.save()
        return user
