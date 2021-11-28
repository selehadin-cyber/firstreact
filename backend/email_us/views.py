from rest_framework.response import Response
from rest_framework.views import APIView

class EmailUsView(APIView):
    def post(self, request, format=None):
        return Response({'success': 'Email successfully sent'})