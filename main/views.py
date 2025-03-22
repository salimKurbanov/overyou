from django.shortcuts import render
from .models import Seo

# Главная страница
def home(request):

    try: 
        home = Seo.objects.get(page='Главная')
        context = {
            'title': home.title,
            'description': home.description,
            'keywords': home.keywords
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх Ты',
            'description': 'Сверх Ты',
            'keywords': 'Сверх ты'
        }

    return render(request, 'main/home.html', context)
