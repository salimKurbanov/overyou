import json
from django.shortcuts import render
from .models import Seo, Applications, Scenaries
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

    scenaries = Scenaries.objects.all()
    context['scenaries'] = scenaries

    return render(request, 'main/home.html', context)

@ensure_csrf_cookie
def process_form(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            contact = data.get('contact')
            name = data.get('name')
            message = data.get('message')
            
            Applications.objects.create(contact=contact, name=name, message=message)

            # send_mail(
            #     'Заявка на обратную связь',
            #     f'Имя: {name}\Контакт: {contact}\Сообщение: {message}',
            #     'ego@sverhty.ru',  #адрес отправителя
            #     ['ego@sverhty.ru'],  #адрес получателя
            #     fail_silently=False,
            # )

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