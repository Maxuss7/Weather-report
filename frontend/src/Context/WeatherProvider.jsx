import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext({
    weather: {},
    forecast: {},
    loading: false,
});

export default function WeatherContextProvider({ children }) {
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const weather = fetch("http://localhost:8000/api/weather?city=Moscow")
            .then((resp) => {
                console.log(resp.json());
            })
            .catch((err) => {
                console.log(err);
            });

        const forecast = fetch("http://localhost:8000/api/forecast?city=Moscow")
            .then((resp) => {
                console.log(resp.json());
            })
            .catch((err) => {
                console.log(err);
            });

        setWeather(weather);
        setForecast(forecast);
        setLoading(false);
    }, []);

    return (
        <WeatherContext.Provider value={{ weather, forecast, loading }}>
            {children}
        </WeatherContext.Provider>
    );
}
