from django.contrib import admin
from django.core.exceptions import PermissionDenied
from .models import Seo, Applications, Scenaries

class ScenariesAdmin(admin.ModelAdmin):
    def get_readonly_fields(self, request, obj=None):
        # Делаем запись с ID = 1 только для чтения
        if obj and (obj.title == 'Индивидуальная терапия' or obj.title == 'Приветствие'):
            return [field.name for field in obj._meta.fields]  # Все поля только для чтения
        return super().get_readonly_fields(request, obj)

    def has_delete_permission(self, request, obj=None):
        # Запрещаем удалять запись с ID = 1
        if obj and (obj.title == 'Индивидуальная терапия' or obj.title == 'Приветствие'):
            return False
        return super().has_delete_permission(request, obj)

    def has_change_permission(self, request, obj=None):
        # Запрещаем редактировать запись с ID = 1
        if obj and (obj.title == 'Индивидуальная терапия' or obj.title == 'Приветствие'):
            return False
        return super().has_change_permission(request, obj)

    def delete_model(self, request, obj):
        # Запрещаем удалять запись с ID = 1
        if obj.title == 'Индивидуальная терапия' or obj.title == 'Приветствие':
            raise PermissionDenied("Эту запись нельзя удалить.")
        super().delete_model(request, obj)

admin.site.register(Seo)
admin.site.register(Applications)
admin.site.register(Scenaries, ScenariesAdmin)