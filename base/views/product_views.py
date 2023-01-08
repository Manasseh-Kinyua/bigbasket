from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.models import Product, Category, Brand, Color
from base.serializers import ProductSerializer

# Create your views here.

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getSingleProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(id=pk)
    product.delete()
    return Response('Product was deleted successfully')

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    data = request.data

    # create category
    category = Category.objects.create(
        name=data['category']
    )

    # create brand
    brand = Brand.objects.create(
        name=data['brand']
    )

    # create color
    color = Color.objects.create(
        name=data['color']
    )

    # create product
    product = Product.objects.create(
        user=user,
        color=color,
        category=category,
        brand=brand,
        name=data['name'],
        description=data['description'],
        price=data['price'],
        countInStock=data['stock'],
    )
    serializer = ProductSerializer(product, many=False)
    
    return Response(serializer.data)