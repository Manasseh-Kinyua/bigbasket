from django.urls import path
from base.views import order_views as views

urlpatterns = [
    path('create/', views.createOrder, name='create-order'),
    path('<str:pk>/', views.getSingleOrder, name='get-order'),
]