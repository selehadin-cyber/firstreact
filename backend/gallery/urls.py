from django.urls import path
from .views import GalleriesView

urlpatterns = [
    path('galleries', GalleriesView.as_view())
]