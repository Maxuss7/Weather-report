import { createContext, useEffect, useState, useContext } from "react";

const WeatherContext = createContext({
    weather: {},
    forecast: {},
    loading: false,
    locationError: "",
    getWeather: () => {},
});

export default function WeatherContextProvider({ children }) {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [loading, setLoading] = useState(false);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [locationError, setLocationError] = useState("");

    const [city, setCity] = useState("");

    function getCoords() {
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
    }

    function getCity() {
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
    }

    function getWeather(city) {
        if (city) {
            setLoading(true);
            Promise.all([
                fetch(`http://localhost:8000/api/weather?city=${city}`).then(
                    (resp) => resp.json()
                ),
                fetch(`http://localhost:8000/api/forecast?city=${city}`).then(
                    (resp) => resp.json()
                ),
            ])
                .then(([weatherData, forecastData]) => {
                    if (weatherData.detail === "City not found.") {
                        alert("Локация не найдена");
                        throw new Error("Не удалось получить данные о погоде.");
                    }
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
    }

    // Получаем координаты
    useEffect(() => {
        getCoords();
    }, []);

    // Получаем город по координатам
    useEffect(() => {
        getCity();
    }, [latitude, longitude]);

    // Получаем данные о погоде
    useEffect(() => {
        getWeather(city);
    }, [city]);

    return (
        <WeatherContext.Provider
            value={{ weather, forecast, loading, locationError, getWeather }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export function useWeather() {
    return useContext(WeatherContext);
}
