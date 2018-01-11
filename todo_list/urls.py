from django.urls import include, path

from rest_framework.routers import SimpleRouter

from .views import TodoListViewSet


router = SimpleRouter()

router.register(r'todo_list', TodoListViewSet, base_name='todo_list')

app_name = 'todo_list'
urlpatterns = [
    path('', include(router.urls))
]
