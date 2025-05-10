from django.urls import path 
from .import views

urlpatterns = [
    path ('' , views.home, name = "home") ,
    path('categories/', views.categories, name='categories'),
    path('categories/<str:category_name>/', views.category_detail, name='category_detail'), 
    path('read/', views.read_view, name='read'),
    
    
]