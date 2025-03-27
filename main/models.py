from django.db import models
from django.core.exceptions import PermissionDenied


class Seo(models.Model):
    page = models.CharField('Название страницы', max_length=100)
    title = models.CharField('Заглавие', max_length=100, blank=True)
    description = models.TextField('Описание страницы', blank=True)
    keywords = models.CharField('Ключевые слова', max_length=500, blank=True)
    h1 = models.CharField('Заголовок', max_length=300, null=True, blank=True)
    url = models.CharField('Ссылка', max_length=500, null=True, blank=True)
    image = models.FileField(upload_to='images/', null=True, blank=True, verbose_name='Изображение')

    def __str__(self):
        return f'Страница {self.page}'
    
    class Meta:
        verbose_name = 'SEO'
        verbose_name_plural = 'SEO'


class Applications(models.Model):
    type = models.CharField('Тип', max_length=100, null=True, blank=True)
    contact = models.CharField('Контакт', max_length=100, null=True, blank=True)
    name = models.CharField('Имя', max_length=100, null=True, blank=True)
    message = models.TextField('Сообщение', null=True, blank=True)

    def __str__(self):
        return f'{self.name} - {self.type}'
    
    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'


class Scenaries(models.Model):
    title = models.CharField('Название', max_length=100, null=True, blank=True)
    description = models.TextField('Описание', null=True, blank=True)
    label_image = models.FileField(upload_to='images/scenaries/', null=True, blank=True, verbose_name='Лэйбл')

    def __str__(self):
        return f'{self.title}'
    
    class Meta:
        verbose_name = 'Сценарии'
        verbose_name_plural = 'Сценарии'