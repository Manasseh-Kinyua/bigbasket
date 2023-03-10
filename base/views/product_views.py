from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.models import Product, Category, Brand, Color, Review
from base.serializers import ProductSerializer, CategorySerializer, BrandSerializer, ColorSerializer
from django.db.models import Q

# Create your views here.

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    products = Product.objects.filter(
        Q(name__icontains=query) |
        Q(description__icontains=query) |
        Q(brand__name__icontains=query) |
        Q(category__name__icontains=query) |
        Q(color__name__icontains=query)
    )
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTopRatedProducts(request):
    products = Product.objects.filter(rating__gte=2).order_by('-rating')[0:5]
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

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def editProduct(request, pk):
    data = request.data
    product = Product.objects.get(id=pk)

    product.name = data['name']
    product.description = data['description']
    product.price = data['price']
    product.countInStock = data['stock']

    product.save()
    serializer = ProductSerializer(product, many=False)
    
    return Response(serializer.data)

@api_view(['POST'])
def uploadImage(request):
    data = request.data

    product_id=data['product_id']
    product = Product.objects.get(id=product_id)

    product.image = request.FILES.get('image')
    product.save()

    return Response('Image was Uploaded')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    product = Product.objects.get(id=pk)
    user = request.user
    data = request.data

    reviewAlreadyExists = product.review_set.filter(user=user).exists()

    if reviewAlreadyExists:
        content = {'detail': 'You have already reviewed this product'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    elif data['rating'] == 0:
        content = {'detail': 'Please select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    else:
        review = Review.objects.create(
            product=product,
            user=user,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating
            product.rating = total / len(reviews)

            product.save()

            return Response('Review aded')

@api_view(['GET'])
def getCategories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getBrands(request):
    brands = Brand.objects.all()
    serializer = BrandSerializer(brands, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getColors(request):
    colors = Color.objects.all()
    serializer = ColorSerializer(colors, many=True)
    return Response(serializer.data)