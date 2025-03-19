from django.shortcuts import render

# Главная страница
def home(request):

    return render(request, 'main/home.html')
