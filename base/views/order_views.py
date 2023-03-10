from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from base.models import Order, Product, ShippingAddress, OrderItem
from base.serializers import ProductSerializer, OrderSerializer
from datetime import datetime

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createOrder(request):
    user = request.user
    data = request.data

    orderItems = data['orderItems']

    if orderItems and len(orderItems) == 0:
        return Response("There are no order items", status=status.HTTP_400_BAD_REQUEST)
    else:
        # create order
        order = Order.objects.create(
        user=user,
        paymentMethod=data['paymentMethod'],
        taxPrice=data['taxPrice'],
        shippingPrice=data['shippingPrice'],
        totalPrice=data['totalPrice'],
        )
        # create shippiing address
        shippingAddress = ShippingAddress.objects.create(
            order=order,
            address=data['shippingAddress']['address'],
            city=data['shippingAddress']['city'],
            postalCode=data['shippingAddress']['postalCode'],
            country=data['shippingAddress']['country'],
        )
        # create order items and create order-order items relationship
        for i in orderItems:
            product = Product.objects.get(id=i['product'])

            item =  OrderItem.objects.create(
                product = product,
                order = order,
                name = product.name,
                quantity = i['quantity'],
                price = i['price'],
                image = product.image.url,
            )
            # update stock
            product.countInStock -= int(item.quantity)
            product.save()

        serializer = OrderSerializer(order, many=False)

        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getAllOrders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSingleOrder(request, pk):
    order = Order.objects.get(id=pk)
    serializer = OrderSerializer(order, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserOrders(request):
    user = request.user

    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)

    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def markOrderAsPaid(request, pk):
    order = Order.objects.get(id=pk)

    order.paid=True
    order.paidAt=datetime.now()
    order.save()

    return Response('Order Paid Successfully')

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def markOrderAsDelivered(request, pk):
    order = Order.objects.get(id=pk)

    order.delivered=True
    order.deliveredAt=datetime.now()
    order.save()

    return Response('Order Paid Successfully')