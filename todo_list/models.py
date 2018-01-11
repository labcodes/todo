from django.db import models
from django.utils.translation import ugettext_lazy as _


class TodoList(models.Model):
    name = models.CharField(_('Name'), max_length=255)

    class Meta:
        verbose_name = 'To-Do List'
        verbose_name_plural = 'To-Do Lists'

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(_('Name'), max_length=255)
    todo_list = models.ForeignKey(
        'todo_list.TodoList',
         verbose_name=_('To-Do List'),
         on_delete=models.CASCADE
    )
    due_date = models.DateField(_('Due Date'), null=True, blank=True)
    owner = models.ForeignKey(
        'users.User',
         verbose_name=_('Owner'),
         on_delete=models.CASCADE
    )

    class Meta:
        verbose_name = 'To-Do List'
        verbose_name_plural = 'To-Do Lists'

    def __str__(self):
        return self.name
