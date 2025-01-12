import { createContext, useEffect, useState, useContext } from "react";

const WeatherContext = createContext({
    weather: {},
    forecast: {},
    loading: false,
    locationError: "",
});

export default function WeatherContextProvider({ children }) {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [loading, setLoading] = useState(false);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [locationError, setLocationError] = useState("");

    const [city, setCity] = useState("");

    // Получаем координаты
    useEffect(() => {
        setLoading(true);

        if (!navigator.geolocation) {
            setLocationError("Ваш браузер не поддерживает геолокацию.");
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        setLocationError(
                            "Вы запретили доступ к вашему местоположению."
                        );
                        break;
                    case error.POSITION_UNAVAILABLE:
                        setLocationError(
                            "Информация о вашем местоположении недоступна."
                        );
                        break;
                    case error.TIMEOUT:
                        setLocationError(
                            "Запрос на получение вашего местоположения истек."
                        );
                        break;
                    default:
                        setLocationError(
                            "Неизвестная ошибка при получении местоположения."
                        );
                        break;
                }
            }
        );
    }, []);

    // Получаем город по координатам
    useEffect(() => {
        if (latitude && longitude) {
            fetch(
                `https://geocode-maps.yandex.ru/1.x/?apikey=${
                    import.meta.env.VITE_GEOCODE_API_KEY
                }&geocode=${longitude},${latitude}&lang=en_RU&kind=locality&format=json`
            )
                .then((response) => response.json())
                .then((data) => {
                    setCity(
                        data.response.GeoObjectCollection.featureMember[0]
                            .GeoObject.name
                    );
                })
                .catch((error) => {
                    console.error("Ошибка при выполнении запроса:", error);
                });
        }
    }, [latitude, longitude]);

    // Получаем данные о погоде
    useEffect(() => {
        if (city) {
            Promise.all([
                fetch(`http://localhost:8000/api/weather?city=${city}`).then(
                    (resp) => resp.json()
                ),
                fetch(`http://localhost:8000/api/forecast?city=${city}`).then(
                    (resp) => resp.json()
                ),
            ])
                .then(([weatherData, forecastData]) => {
                    setWeather(weatherData);
                    setForecast(forecastData);
                })
                .catch((error) => {
                    console.error(
                        "Ошибка при получении данных о погоде:",
                        error
                    );
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [city]);

    return (
        <WeatherContext.Provider
            value={{ weather, forecast, loading, locationError }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export function useWeather() {
    return useContext(WeatherContext);
}
