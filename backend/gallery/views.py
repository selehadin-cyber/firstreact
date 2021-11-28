from rest_framework.views import APIView
from rest_framework.response import Response

class GalleriesView(APIView):
    def post(self, request, format=None):
        Response({'success': 'Successfully added gallery'})