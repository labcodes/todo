from django.db import models
from django.utils.translation import ugettext_lazy as _


class TodoList(models.Model):
    name = models.CharField(_('Name'), max_length=255)

    class Meta:
        verbose_name = 'To-Do List'
        verbose_name_plural = 'To-Do Lists'

    def __str__(self):
        return self.name
