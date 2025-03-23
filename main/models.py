from django.db import models

class Seo(models.Model):
    page = models.CharField('Название страницы', max_length=100)
    title = models.CharField('Заглавие', max_length=100, blank=True)
    description = models.CharField('Описание страницы', max_length=100, blank=True)
    keywords = models.CharField('Ключевые слова', max_length=100, blank=True)
    h1 = models.CharField('Заголовок', max_length=100, null=True, blank=True)
    url = models.CharField('Ссылка', max_length=100, null=True, blank=True)
    image = models.FileField(upload_to='images/', null=True, blank=True, verbose_name='Изображение')

    def __str__(self):
        return f'Страница {self.page}'
    
    class Meta:
        verbose_name = 'SEO'
        verbose_name_plural = 'SEO'
