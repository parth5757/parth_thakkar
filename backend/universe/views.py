# from django.http import JsonResponse

# def hello(request):
#     return JsonResponse({'message': 'Hello from the Universe!'})

from django.http import JsonResponse
from datetime import timedelta, datetime
def hello(request):
    response_data = {
        "message": "Hello from Parth Thakkar!"
    }
    return JsonResponse(response_data)


def stop_watch(request):
    """
    Returns the time remaining until January 1st, 2024 as a JSON response.
    """
    # Get the current time
    current_time = datetime.now()

    # Set target date as January 1st, 2024
    target_date = datetime(2024, 1, 1)

    # Calculate time remaining until target date
    time_remaining = target_date - current_time

    # Convert remaining time to seconds and format for response
    seconds_remaining = int(time_remaining.total_seconds())
    formatted_time_remaining = str(timedelta(seconds=seconds_remaining))

    # Prepare and return JSON response
    response_data = {
        "message": "Time remaining until January 1st, 2024:",
        "time_remaining": formatted_time_remaining
    }
    return JsonResponse(response_data)