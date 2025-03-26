from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.home, name='home'),
    path('stanislav_sanachev/', views.fire_page, name='fire_page'),
    path('irina_svirina/', views.air_page, name='air_page'),
    path('irina_lukatskaya/', views.water_page, name='water_page'),
    path('ulyana_komarova/', views.earth_page, name='earth_page'),
    path('process_form/', views.process_form, name='process_form'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)