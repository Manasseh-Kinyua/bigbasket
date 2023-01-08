from django.urls import path
from base.views import product_views as views

urlpatterns = [
    path('', views.getProducts, name='products'),
    path('create/', views.createProduct, name='create-product'),
    path('<str:pk>/', views.getSingleProduct, name='product'),
    path('<str:pk>/delete/', views.deleteProduct, name='delete-product'),
    path('<str:pk>/edit/', views.editProduct, name='edit-product'),
    path('<str:pk>/upload/', views.uploadImage, name='upload-product-image'),
]