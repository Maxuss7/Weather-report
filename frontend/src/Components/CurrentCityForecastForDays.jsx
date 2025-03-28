import { useWeather } from "../Context/WeatherProvider";
import WeatherCardCarousel from "./WeatherCardCarousel.jsx";

export default function CurrentCityForecastForDays() {
    const { weather } = useWeather();

    return (
        <section>
            <h2 style={{ textAlign: "center" }}>Прогноз на 5 дней</h2>
            {weather.forecast5d[0] && (
                <WeatherCardCarousel list={weather.forecast5d} isDay={true} />
            )}
        </section>
    );
}
