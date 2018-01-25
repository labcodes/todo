from django.urls import include, path

from rest_framework.routers import SimpleRouter

from .views import TaskViewSet, TodoListViewSet


router = SimpleRouter()

router.register(r'tasks', TaskViewSet, base_name='tasks')
router.register(r'todo-lists', TodoListViewSet, base_name='todo_lists')

app_name = 'todo_list'
urlpatterns = [
    path('', include(router.urls))
]
