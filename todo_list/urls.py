from django.urls import include, path

from rest_framework.routers import SimpleRouter

from .views import TaskViewSet, TodoListViewSet


router = SimpleRouter()

router.register(r'task', TaskViewSet, base_name='task')
router.register(r'todo-list', TodoListViewSet, base_name='todo_list')

app_name = 'todo_list'
urlpatterns = [
    path('', include(router.urls))
]
