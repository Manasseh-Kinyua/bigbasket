from django.contrib import admin
from .models import Brand, Color, Category, Product, Order, Review, OrderItem, ShippingAddress

# Register your models here.

admin.site.register(Brand)
admin.site.register(Color)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Review)
admin.site.register(ShippingAddress)