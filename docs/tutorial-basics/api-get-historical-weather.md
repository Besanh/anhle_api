---
sidebar_position: 2
---

# API Get Historical Weather

This API can get historical weather in 3 cities in VietNam:

- `Ha Noi capital`
- `Da Nang city`
- `Ho Chi Minh city`

## Request API

```jsx title="Curl"
curl --location '{{DOMAIN}}/v1/weather/historical'
```

## Response

If API call success, you will recieve http status **`200 OK`** and response here

```jsx title="Response"
{
    "data": {
        "list": [
            {
                "main": {
                    "temp": 300.69,
                    "feels_like": 304.92,
                    "temp_min": 300.69,
                    "temp_max": 301.86,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1004,
                    "humidity": 86,
                    "temp_kf": -1.17
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 4.94,
                    "deg": 234,
                    "gust": 10.71
                },
                "visibility": 10000,
                "pop": 0.97,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-10 12:00:00"
            },
            {
                "main": {
                    "temp": 300.37,
                    "feels_like": 303.6,
                    "temp_min": 300.37,
                    "temp_max": 300.51,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1007,
                    "humidity": 82,
                    "temp_kf": -0.14
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.88,
                    "deg": 234,
                    "gust": 9.52
                },
                "visibility": 10000,
                "pop": 0.33,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-10 15:00:00"
            },
            {
                "main": {
                    "temp": 299.99,
                    "feels_like": 302.62,
                    "temp_min": 299.99,
                    "temp_max": 299.99,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1005,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.61,
                    "deg": 238,
                    "gust": 10.5
                },
                "visibility": 10000,
                "pop": 0.26,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-10 18:00:00"
            },
            {
                "main": {
                    "temp": 299.82,
                    "feels_like": 302.4,
                    "temp_min": 299.82,
                    "temp_max": 299.82,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1005,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.44,
                    "deg": 244,
                    "gust": 9.94
                },
                "visibility": 10000,
                "pop": 0.1,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-10 21:00:00"
            },
            {
                "main": {
                    "temp": 300.5,
                    "feels_like": 303.46,
                    "temp_min": 300.5,
                    "temp_max": 300.5,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1006,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 3.78,
                    "deg": 257,
                    "gust": 10.08
                },
                "visibility": 10000,
                "pop": 0.25,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-11 00:00:00"
            },
            {
                "main": {
                    "temp": 302.92,
                    "feels_like": 305.93,
                    "temp_min": 302.92,
                    "temp_max": 302.92,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1007,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 6.25,
                    "deg": 273,
                    "gust": 10.73
                },
                "visibility": 10000,
                "pop": 0.37,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-11 03:00:00"
            },
            {
                "main": {
                    "temp": 301.45,
                    "feels_like": 304.12,
                    "temp_min": 301.45,
                    "temp_max": 301.45,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1005,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.93,
                    "deg": 255,
                    "gust": 10.45
                },
                "visibility": 10000,
                "pop": 0.45,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-11 06:00:00"
            },
            {
                "main": {
                    "temp": 300.4,
                    "feels_like": 302.93,
                    "temp_min": 300.4,
                    "temp_max": 300.4,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1004,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.54,
                    "deg": 257,
                    "gust": 8.54
                },
                "visibility": 10000,
                "pop": 0.11,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-11 09:00:00"
            },
            {
                "main": {
                    "temp": 300.14,
                    "feels_like": 302.33,
                    "temp_min": 300.14,
                    "temp_max": 300.14,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1006,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.48,
                    "deg": 260,
                    "gust": 8.75
                },
                "visibility": 10000,
                "pop": 0.1,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-11 12:00:00"
            },
            {
                "main": {
                    "temp": 299.26,
                    "feels_like": 299.26,
                    "temp_min": 299.26,
                    "temp_max": 299.26,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1007,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 2.14,
                    "deg": 220,
                    "gust": 5.92
                },
                "visibility": 10000,
                "pop": 0.06,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-11 15:00:00"
            },
            {
                "main": {
                    "temp": 298.86,
                    "feels_like": 299.68,
                    "temp_min": 298.86,
                    "temp_max": 298.86,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1006,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 66
                },
                "wind": {
                    "speed": 2.93,
                    "deg": 241,
                    "gust": 9.52
                },
                "visibility": 10000,
                "pop": 0.03,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-11 18:00:00"
            },
            {
                "main": {
                    "temp": 297.83,
                    "feels_like": 298.73,
                    "temp_min": 297.83,
                    "temp_max": 297.83,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1005,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 78
                },
                "wind": {
                    "speed": 2.25,
                    "deg": 238,
                    "gust": 6.61
                },
                "visibility": 10000,
                "pop": 0.52,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-11 21:00:00"
            },
            {
                "main": {
                    "temp": 299.22,
                    "feels_like": 299.22,
                    "temp_min": 299.22,
                    "temp_max": 299.22,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1007,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 69
                },
                "wind": {
                    "speed": 2.64,
                    "deg": 241,
                    "gust": 6.3
                },
                "visibility": 10000,
                "pop": 0.7,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-12 00:00:00"
            },
            {
                "main": {
                    "temp": 304.39,
                    "feels_like": 308.78,
                    "temp_min": 304.39,
                    "temp_max": 304.39,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1007,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 43
                },
                "wind": {
                    "speed": 4.66,
                    "deg": 258,
                    "gust": 7.11
                },
                "visibility": 10000,
                "pop": 0.47,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-12 03:00:00"
            },
            {
                "main": {
                    "temp": 306.99,
                    "feels_like": 310.55,
                    "temp_min": 306.99,
                    "temp_max": 306.99,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1004,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 5.41,
                    "deg": 263,
                    "gust": 7.71
                },
                "visibility": 10000,
                "pop": 0.53,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-12 06:00:00"
            },
            {
                "main": {
                    "temp": 306.71,
                    "feels_like": 310.28,
                    "temp_min": 306.71,
                    "temp_max": 306.71,
                    "pressure": 1004,
                    "sea_level": 1004,
                    "grnd_level": 1003,
                    "humidity": 49,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 90
                },
                "wind": {
                    "speed": 5.33,
                    "deg": 252,
                    "gust": 7.37
                },
                "visibility": 10000,
                "pop": 0.45,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-12 09:00:00"
            },
            {
                "main": {
                    "temp": 302.96,
                    "feels_like": 306.01,
                    "temp_min": 302.96,
                    "temp_max": 302.96,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1005,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 4.86,
                    "deg": 237,
                    "gust": 9.51
                },
                "visibility": 10000,
                "pop": 0.45,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-12 12:00:00"
            },
            {
                "main": {
                    "temp": 301.29,
                    "feels_like": 304.23,
                    "temp_min": 301.29,
                    "temp_max": 301.29,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1007,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 74
                },
                "wind": {
                    "speed": 4.4,
                    "deg": 237,
                    "gust": 10.62
                },
                "visibility": 10000,
                "pop": 0.34,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-12 15:00:00"
            },
            {
                "main": {
                    "temp": 300.04,
                    "feels_like": 302.65,
                    "temp_min": 300.04,
                    "temp_max": 300.04,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1006,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 70
                },
                "wind": {
                    "speed": 3.82,
                    "deg": 241,
                    "gust": 10.37
                },
                "visibility": 10000,
                "pop": 0.34,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-12 18:00:00"
            },
            {
                "main": {
                    "temp": 299.37,
                    "feels_like": 299.37,
                    "temp_min": 299.37,
                    "temp_max": 299.37,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1006,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 3.08,
                    "deg": 240,
                    "gust": 9.48
                },
                "visibility": 10000,
                "pop": 0.15,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-12 21:00:00"
            },
            {
                "main": {
                    "temp": 300.64,
                    "feels_like": 303.89,
                    "temp_min": 300.64,
                    "temp_max": 300.64,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1007,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 3.67,
                    "deg": 246,
                    "gust": 8.65
                },
                "visibility": 10000,
                "pop": 0.16,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-13 00:00:00"
            },
            {
                "main": {
                    "temp": 305.7,
                    "feels_like": 309.38,
                    "temp_min": 305.7,
                    "temp_max": 305.7,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1007,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 57
                },
                "wind": {
                    "speed": 5.39,
                    "deg": 265,
                    "gust": 7.5
                },
                "visibility": 10000,
                "pop": 0.19,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-13 03:00:00"
            },
            {
                "main": {
                    "temp": 307.29,
                    "feels_like": 310.85,
                    "temp_min": 307.29,
                    "temp_max": 307.29,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1005,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 77
                },
                "wind": {
                    "speed": 5.17,
                    "deg": 262,
                    "gust": 6.78
                },
                "visibility": 10000,
                "pop": 0.39,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-13 06:00:00"
            },
            {
                "main": {
                    "temp": 305.99,
                    "feels_like": 309.69,
                    "temp_min": 305.99,
                    "temp_max": 305.99,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1003,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.49,
                    "deg": 233,
                    "gust": 6.22
                },
                "visibility": 10000,
                "pop": 0.37,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-13 09:00:00"
            },
            {
                "main": {
                    "temp": 303.63,
                    "feels_like": 307.15,
                    "temp_min": 303.63,
                    "temp_max": 303.63,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1005,
                    "humidity": 61,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 87
                },
                "wind": {
                    "speed": 4.46,
                    "deg": 232,
                    "gust": 8.66
                },
                "visibility": 10000,
                "pop": 0.37,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-13 12:00:00"
            },
            {
                "main": {
                    "temp": 301.18,
                    "feels_like": 304.01,
                    "temp_min": 301.18,
                    "temp_max": 301.18,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1007,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 57
                },
                "wind": {
                    "speed": 3.8,
                    "deg": 236,
                    "gust": 9.55
                },
                "visibility": 10000,
                "pop": 0.45,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-13 15:00:00"
            },
            {
                "main": {
                    "temp": 300.13,
                    "feels_like": 302.66,
                    "temp_min": 300.13,
                    "temp_max": 300.13,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1006,
                    "humidity": 78,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 68
                },
                "wind": {
                    "speed": 3.43,
                    "deg": 247,
                    "gust": 9.29
                },
                "visibility": 10000,
                "pop": 0.36,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-13 18:00:00"
            },
            {
                "main": {
                    "temp": 299.29,
                    "feels_like": 299.29,
                    "temp_min": 299.29,
                    "temp_max": 299.29,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1006,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 1.96,
                    "deg": 247,
                    "gust": 5.5
                },
                "visibility": 10000,
                "pop": 0.04,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-13 21:00:00"
            },
            {
                "main": {
                    "temp": 300.81,
                    "feels_like": 304.02,
                    "temp_min": 300.81,
                    "temp_max": 300.81,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1008,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 2.41,
                    "deg": 242,
                    "gust": 5.27
                },
                "visibility": 10000,
                "pop": 0.11,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 00:00:00"
            },
            {
                "main": {
                    "temp": 306.21,
                    "feels_like": 309.85,
                    "temp_min": 306.21,
                    "temp_max": 306.21,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1008,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 62
                },
                "wind": {
                    "speed": 4.54,
                    "deg": 267,
                    "gust": 6.6
                },
                "visibility": 10000,
                "pop": 0.14,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 03:00:00"
            },
            {
                "main": {
                    "temp": 307.65,
                    "feels_like": 310.63,
                    "temp_min": 307.65,
                    "temp_max": 307.65,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1005,
                    "humidity": 44,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 81
                },
                "wind": {
                    "speed": 5.2,
                    "deg": 268,
                    "gust": 6.82
                },
                "visibility": 10000,
                "pop": 0.26,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 06:00:00"
            },
            {
                "main": {
                    "temp": 305.64,
                    "feels_like": 309.54,
                    "temp_min": 305.64,
                    "temp_max": 305.64,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1005,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.46,
                    "deg": 253,
                    "gust": 7.16
                },
                "visibility": 10000,
                "pop": 0.21,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-14 09:00:00"
            },
            {
                "main": {
                    "temp": 303.66,
                    "feels_like": 306.54,
                    "temp_min": 303.66,
                    "temp_max": 303.66,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1006,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.83,
                    "deg": 245,
                    "gust": 9.07
                },
                "visibility": 10000,
                "pop": 0.21,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 12:00:00"
            },
            {
                "main": {
                    "temp": 301.31,
                    "feels_like": 303.85,
                    "temp_min": 301.31,
                    "temp_max": 301.31,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1008,
                    "humidity": 68,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 4.26,
                    "deg": 245,
                    "gust": 10.72
                },
                "visibility": 10000,
                "pop": 0.1,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 15:00:00"
            },
            {
                "main": {
                    "temp": 300.22,
                    "feels_like": 302.48,
                    "temp_min": 300.22,
                    "temp_max": 300.22,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1007,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 3.32,
                    "deg": 246,
                    "gust": 9.5
                },
                "visibility": 10000,
                "pop": 0.06,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 18:00:00"
            },
            {
                "main": {
                    "temp": 299.3,
                    "feels_like": 299.3,
                    "temp_min": 299.3,
                    "temp_max": 299.3,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1007,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 55
                },
                "wind": {
                    "speed": 2.63,
                    "deg": 246,
                    "gust": 7.83
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-06-14 21:00:00"
            },
            {
                "main": {
                    "temp": 300.87,
                    "feels_like": 303.9,
                    "temp_min": 300.87,
                    "temp_max": 300.87,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1008,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 3.21,
                    "deg": 259,
                    "gust": 7.84
                },
                "visibility": 10000,
                "pop": 0.03,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 00:00:00"
            },
            {
                "main": {
                    "temp": 305.89,
                    "feels_like": 309.48,
                    "temp_min": 305.89,
                    "temp_max": 305.89,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1008,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.32,
                    "deg": 275,
                    "gust": 6.59
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 03:00:00"
            },
            {
                "main": {
                    "temp": 308.24,
                    "feels_like": 310.84,
                    "temp_min": 308.24,
                    "temp_max": 308.24,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1005,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.06,
                    "deg": 271,
                    "gust": 6.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 06:00:00"
            },
            {
                "main": {
                    "temp": 305.5,
                    "feels_like": 308.69,
                    "temp_min": 305.5,
                    "temp_max": 305.5,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1004,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.99,
                    "deg": 247,
                    "gust": 7.83
                },
                "visibility": 10000,
                "pop": 0.07,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-06-15 09:00:00"
            }
        ]
    }
}
```