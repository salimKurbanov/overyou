import json
from django.shortcuts import render
from .models import Seo
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie


# Главная страница
def home(request):

    try: 
        seo = Seo.objects.get(page='Главная')
        context = {
            'title': seo.title,
            'description': seo.description,
            'keywords': seo.keywords,
            'h1': seo.h1,
            'url': seo.url,
            'image': seo.image
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх Ты',
            'description': 'Сверх Ты',
            'keywords': 'Сверх ты',
            'h1': '',
            'url': '',
            'image': ''
        }

    return render(request, 'main/home.html', context)

@ensure_csrf_cookie
def process_form(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            type = data.get('type')
            

            if type == 'telegram': 
                telegram = data.get('telegram')
                name = data.get('name')
                message = data.get('message')
                pass

            if type == 'email':
                email = data.get('email')
                name = data.get('name')
                message = data.get('message')
                # send_mail(
                #     'Contact Form Submission',
                #     f'Name: {name}\nEmail: {email}\nMessage: {message}',
                #     'from@example.com',  #адрес отправителя
                #     ['to@example.com'],  #адрес получателя
                #     fail_silently=False,
                # )
                pass

            return JsonResponse({'message': 'Form submitted successfully!'}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    

def fire_page (request):

    try: 
        seo = Seo.objects.get(page='Станислав Саначев')
        context = {
            'title': seo.title,
            'description': seo.description,
            'keywords': seo.keywords,
            'h1': seo.h1,
            'url': seo.url,
            'image': seo.image
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': '',
            'h1': '',
            'url': '',
            'image': 'none'
        }

    return render(request, 'main/fire_page.html', context)

def air_page (request):

    try: 
        seo = Seo.objects.get(page='Ирина Свирина')
        context = {
            'title': seo.title,
            'description': seo.description,
            'keywords': seo.keywords,
            'h1': seo.h1,
            'url': seo.url,
            'image': seo.image
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': 'Сверх ты',
            'h1': '',
            'url': '',
            'image': ''
        }
    return render(request, 'main/air_page.html', context)

def water_page (request):

    try: 
        seo = Seo.objects.get(page='Ирина Лукацкая')
        context = {
            'title': seo.title,
            'description': seo.description,
            'keywords': seo.keywords,
            'h1': seo.h1,
            'url': seo.url,
            'image': seo.image
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': 'Сверх ты',
            'h1': '',
            'url': '',
            'image': ''
        }

    return render(request, 'main/water_page.html', context)

def earth_page (request):

    try: 
        seo = Seo.objects.get(page='Ульяна Комарова')
        context = {
            'title': seo.title,
            'description': seo.description,
            'keywords': seo.keywords,
            'h1': seo.h1,
            'url': seo.url,
            'image': seo.image
        }

    except Seo.DoesNotExist:
        context = {
            'title': 'Сверх ты',
            'description': 'Сверх ты',
            'keywords': 'Сверх ты',
            'h1': '',
            'url': '',
            'image': ''
        }

    return render(request, 'main/earth_page.html', context)