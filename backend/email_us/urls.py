from django.urls import path
from .views import EmailUsView

urlpatterns = [
    path('email_us', EmailUsView.as_view())
]