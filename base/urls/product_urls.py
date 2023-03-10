from django.urls import path
from base.views import product_views as views

urlpatterns = [
    path('', views.getProducts, name='products'),
    path('top/', views.getTopRatedProducts, name='top-products'),
    path('categories/', views.getCategories, name='categories'),
    path('brands/', views.getBrands, name='brands'),
    path('colors/', views.getColors, name='colors'),
    path('create/', views.createProduct, name='create-product'),
    path('upload/', views.uploadImage, name='upload-product-image'),
    path('<str:pk>/', views.getSingleProduct, name='product'),
    path('<str:pk>/delete/', views.deleteProduct, name='delete-product'),
    path('<str:pk>/edit/', views.editProduct, name='edit-product'),
    path('<str:pk>/review/', views.createProductReview, name='review-product'),
]