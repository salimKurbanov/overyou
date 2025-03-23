from django.db import models

class Seo(models.Model):
    page = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    keywords = models.CharField(max_length=100)

    def __str__(self):
        return f'Страница {self.page}'
    
    class Meta:
        verbose_name = 'SEO'
        verbose_name_plural = 'SEO'
