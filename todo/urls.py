"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.views.generic import TemplateView
from django.urls import include, path, re_path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='webapp/index.html')),
    re_path('api/(?P<version>(v1.0))/todo/', include('todo_list.urls', namespace='todo_list')),
    re_path('api/(?P<version>(v1.0))/users/', include('users.urls', namespace='users')),
]
