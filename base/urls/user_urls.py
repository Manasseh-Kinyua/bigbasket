from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='user-register'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('profile/edit/', views.editUserProfile, name='user-profile-edit'),
    path('<str:pk>/delete/', views.deleteUser, name='delete-user'),
    path('', views.getUsers, name='users'),
    
]