from django.urls import path

from apps.apartment import views

urlpatterns = [
    path('catalog/', views.catalog, name="catalog"),
    path('test/', views.test, name="test"),
    path('planing/<int:id>/', views.planing, name='planing')

]
