from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.models import Order, Product
from base.serializers import ProductSerializer

def createOrder(request):
    data = request.data

    order = Order.objects.create()

    serializer = OrderSerializer(order, many=False)
    
    return Response(serializer.data)