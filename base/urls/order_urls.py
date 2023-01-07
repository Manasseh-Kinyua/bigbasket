from django.urls import path
from base.views import order_views as views

urlpatterns = [
    path('create/', views.createOrder, name='create-order'),
    path('customer/', views.getUserOrders, name='customer-orders'),
    path('<str:pk>/', views.getSingleOrder, name='get-order'),
    path('<str:pk>/pay/', views.markOrderAsPaid, name='pay-order'),
    path('<str:pk>/deliver/', views.markOrderAsDelivered, name='deliver-order'),
]