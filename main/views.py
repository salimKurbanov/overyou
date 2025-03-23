import json
from django.shortcuts import render
from .models import Seo
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie


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

@ensure_csrf_cookie
def process_form(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            type = data.get('type')
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            if type == 'telegram': 
                pass

            if type == 'email':
                # send_mail(
                #     'Contact Form Submission',
                #     f'Name: {name}\nEmail: {email}\nMessage: {message}',
                #     'from@example.com',  #адрес отправителя
                #     ['to@example.com'],  #адрес получателя
                #     fail_silently=False,
                # )
                pass

            return JsonResponse({'message': 'Form submitted successfully!'})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    
def fire_page (request):

    try: 
        fire = Seo.objects.get(page='Станислав Саначев')
        context = {
            'title': fire.title,
            'description': fire.description,
            'keywords': fire.keywords
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': 'Сверх ты'
        }

    return render(request, 'main/fire_page.html', context)

def air_page (request):

    try: 
        air = Seo.objects.get(page='Ирина Свирина')
        context = {
            'title': air.title,
            'description': air.description,
            'keywords': air.keywords
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': 'Сверх ты'
        }
    return render(request, 'main/air_page.html', context)

def water_page (request):

    try: 
        water = Seo.objects.get(page='Ирина Лукацкая')
        context = {
            'title': water.title,
            'description': water.description,
            'keywords': water.keywords
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': 'Сверх ты'
        }

    return render(request, 'main/water_page.html', context)

def earth_page (request):

    try: 
        earth = Seo.objects.get(page='Ульяна Комарова')
        context = {
            'title': earth.title,
            'description': earth.description,
            'keywords': earth.keywords
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': 'Сверх ты'
        }

    return render(request, 'main/earth_page.html')