---
sidebar_position: 1
---

# API Get Current Weather

This API can get current weather in 3 cities in VietNam:

- `Ha Noi capital`
- `Da Nang city`
- `Ho Chi Minh city`

## Request API

```jsx title="Curl"
curl --location '{{DOMAIN}}/v1/weather/data'
```

## Response

If API call success, you will recieve http status **`200 OK`** and response here

```jsx title="Response"
{
    "data": [
        {
            "coord": {
                "lon": 106.7018,
                "lat": 10.7758
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 300.1,
                "feels_like": 304.16,
                "temp_min": 300.1,
                "temp_max": 300.1,
                "pressure": 1005,
                "humidity": 94
            },
            "visibility": 10000,
            "wind": {
                "speed": 4.12,
                "deg": 260
            },
            "clouds": {
                "all": 75
            },
            "dt": 1686391121,
            "sys": {
                "type": 1,
                "id": 9314,
                "country": "VN",
                "sunrise": 1686349826,
                "sunset": 1686395688
            },
            "timezone": 25200,
            "id": 1566083,
            "name": "Ho Chi Minh City",
            "cod": 200,
            "name_location": "Ho Chi Minh"
        },
        {
            "coord": {
                "lon": 105.8466,
                "lat": 21.0307
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 308.12,
                "feels_like": 311.25,
                "temp_min": 308.12,
                "temp_max": 308.12,
                "pressure": 998,
                "humidity": 43
            },
            "visibility": 10000,
            "wind": {
                "speed": 0.67,
                "deg": 32
            },
            "clouds": {
                "all": 93
            },
            "dt": 1686390836,
            "sys": {
                "type": 1,
                "id": 9308,
                "country": "VN",
                "sunrise": 1686348877,
                "sunset": 1686397048
            },
            "timezone": 25200,
            "id": 1561096,
            "name": "Xom Pho",
            "cod": 200,
            "name_location": "Ha Noi"
        },
        {
            "coord": {
                "lon": 108.212,
                "lat": 16.068
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 304.14,
                "feels_like": 309.56,
                "temp_min": 304.14,
                "temp_max": 304.14,
                "pressure": 1001,
                "humidity": 66
            },
            "visibility": 10000,
            "wind": {
                "speed": 2.06,
                "deg": 160
            },
            "clouds": {
                "all": 75
            },
            "dt": 1686390866,
            "sys": {
                "type": 1,
                "id": 9306,
                "country": "VN",
                "sunrise": 1686348885,
                "sunset": 1686395904
            },
            "timezone": 25200,
            "id": 1583992,
            "name": "Turan",
            "cod": 200,
            "name_location": "Da Nang"
        }
    ]
}
```