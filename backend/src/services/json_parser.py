from datetime import datetime, timedelta

WEEKDAYS_RU = {
    0: "Понедельник",
    1: "Вторник",
    2: "Среда",
    3: "Четверг",
    4: "Пятница",
    5: "Суббота",
    6: "Воскресенье"
}

WEEKDAYS_EN = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
}

def filter_forecast(data):
    """
    Filters the forecast data and adds additional fields.

    Args:
        data (dict): The full forecast data from the API.

    Returns:
        list: A list of filtered forecast data.
    """
    filtered_forecasts = []
    for forecast in data['list']:
        dt_txt = forecast['dt_txt']
        date, time = dt_txt.split(" ")
        time_without_seconds = time.rsplit(":", 1)[0]

        fulldate = date
        date_russian = datetime.strptime(date, "%Y-%m-%d").strftime("%d.%m.%Y")
        small_date_russian = datetime.strptime(date, "%Y-%m-%d").strftime("%d.%m")

        weekday_number = datetime.strptime(date, "%Y-%m-%d").weekday()
        weekday_ru = WEEKDAYS_RU[weekday_number]
        weekday_en = WEEKDAYS_EN[weekday_number]

        forecast['time'] = time_without_seconds
        forecast['fulldate'] = fulldate
        forecast['date_russian'] = date_russian
        forecast['small_date_russian'] = small_date_russian
        forecast['weekday_ru'] = weekday_ru
        forecast['weekday_en'] = weekday_en

        del forecast['dt_txt']
        del forecast['dt']
        del forecast['clouds']
        del forecast['visibility']

        filtered_forecasts.append(forecast)

    return filtered_forecasts

def filter_24_hours_forecast(data):
    """
    Filters the forecast data to return only the next 24 hours (8 forecasts).

    Args:
        data (dict): The full forecast data from the API.

    Returns:
        list: A list of forecast data for the next 24 hours.
    """
    filtered_forecasts = filter_forecast(data)
    return filtered_forecasts[:8]

def filter_5_days_forecast(data):
    """
    Filters the forecast data to return 5 days forecasts (5 forecasts at 12:00).

    Args:
        data (dict): The full forecast data from the API.

    Returns:
        list: 5 forecasts at 12:00 (one per day).
    """
    filtered_forecasts = filter_forecast(data)
    five_forecasts = []

    for forecast in filtered_forecasts:
        if forecast.get('time') == "12:00":
            five_forecasts.append(forecast)

    return five_forecasts