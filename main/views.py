from django.shortcuts import render

# Главная страница
def home(request):

    context = {
        'title': 'Сверх ТЫ',
        'description': 'Сверх ТЫ',
    }

    return render(request, 'main/home.html', context)
