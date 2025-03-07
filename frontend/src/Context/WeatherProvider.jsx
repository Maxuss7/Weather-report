import { createContext, useEffect, useState, useContext } from "react";

const WeatherContext = createContext({
    weather: {},
    forecast24h: {},
    forecast5d: {},
    loading: false,
    locationError: "",
    getWeather: () => {},
});

export default function WeatherContextProvider({ children }) {
    const [weather, setWeather] = useState({});
    const [forecast24h, setForecast24h] = useState({});
    const [forecast5d, setForecast5d] = useState({});

    const [loading, setLoading] = useState(false);

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [locationError, setLocationError] = useState("");

    const [city, setCity] = useState("");

    function getCoords() {
        setLoading(true);

        if (!navigator.geolocation) {
            setLocationError("Ваш браузер не поддерживает геолокацию.");
            setLoading(false); // Сбрасываем loading
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setLoading(false); // Сбрасываем loading после успеха
            },
            (error) => {
                setLatitude(55.7558); // Значения по умолчанию (Москва)
                setLongitude(37.6176);
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
                setLoading(false); // Сбрасываем loading в случае ошибки
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
                    const newCity =
                        data.response.GeoObjectCollection.featureMember[0]
                            .GeoObject.name;
                    setCity(newCity); // Обновляем city
                })
                .catch((error) => {
                    console.error("Ошибка при выполнении запроса:", error);
                });
        }
    }

    async function getCurrentWeather(city) {
        const response = await fetch(
            `http://localhost:8000/api/weather?city=${city}`
        ).then((resp) => resp.json());
        return response;
    }

    async function getForecast24h(city) {
        const response = await fetch(
            `http://localhost:8000/api/get_24_hours_forecast?city=${city}`
        ).then((resp) => resp.json());

        return response;
    }

    async function getForecast5d(city) {
        const response = await fetch(
            `http://localhost:8000/api/get_24_hours_forecast?city=${city}`
        ).then((resp) => resp.json());

        return response;
    }

    async function getWeather(city) {
        if (city) {
            const weather = await getCurrentWeather(city);
            const forecast24h = await getForecast24h(city);
            const forecast5d = await getForecast5d(city);
            setWeather(weather);
            setForecast24h(forecast24h);
            setForecast5d(forecast5d);
        }
    }

    // Получаем координаты при монтировании компонента
    useEffect(() => {
        getCoords();
    }, []);

    // Получаем город по координатам
    useEffect(() => {
        if (latitude && longitude) {
            getCity();
        }
    }, [latitude, longitude]);

    // Получаем погоду при изменении города
    useEffect(() => {
        if (city) {
            setLoading(true);
            getWeather(city);
            setLoading(false);
        }
    }, [city]);

    return (
        <WeatherContext.Provider
            value={{ weather, forecast24h, forecast5d, loading, locationError, getWeather }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export function useWeather() {
    return useContext(WeatherContext);
}
