from rest_framework import serializers
from .models import Product, Brand, Color, Category
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField(read_only=True)
    brand = serializers.SerializerMethodField(read_only=True)
    color = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = "__all__"

    def get_category(self, obj):
        category = obj.category
        serializer = CategorySerializer(category, many=False)
        return serializer.data

    def get_brand(self, obj):
        brand = obj.brand
        serializer = BrandSerializer(brand, many=False)
        return serializer.data

    def get_color(self, obj):
        color = obj.color
        serializer = BrandSerializer(color, many=False)
        return serializer.data