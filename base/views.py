from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def getRoutes(request):
    routes = [
        "api/products/",
        "api/products/id/",
        "api/reviews/",
        "api/orders/",
        "api/orders/id/",
    ]
    return HttpResponse(routes)