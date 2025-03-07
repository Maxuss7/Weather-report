import { useWeather } from "../Context/WeatherProvider";
import WeatherCardCarousel from "./WeatherCardCarousel.jsx";

export default function CurrentCityForecastForDay() {
    const { weather } = useWeather();
    return (
        <section>
            <h2 style={{ textAlign: "center" }}>Прогноз на 24 часа</h2>
            {weather.forecast24h[0] && (
                <WeatherCardCarousel list={weather.forecast24h} />
            )}
        </section>
    );
}
