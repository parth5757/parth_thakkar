# from django.http import JsonResponse

# def hello(request):
#     return JsonResponse({'message': 'Hello from the Universe!'})

from django.http import JsonResponse

def hello(request):
    response_data = {
        "message": "Hello from the Universe!"
    }
    return JsonResponse(response_data)
