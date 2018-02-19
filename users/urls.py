from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token

from .views import SignUpView


app_name='users'
urlpatterns = [
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-verify/', verify_jwt_token),
    path('signup/', SignUpView.as_view(), name='signup')
]
