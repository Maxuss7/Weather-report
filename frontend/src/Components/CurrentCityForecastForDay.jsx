import { useWeather } from "../Context/WeatherProvider";
import WeatherCardCarousel from "./WeatherCardCarousel.jsx";

export default function CurrentCityForecastForDay() {
    const { forecast } = useWeather();
    return (
        <section>
            <h2 style={{ textAlign: "center" }}>Прогноз на 24 часа</h2>
            {forecast.list && (
                <WeatherCardCarousel list={forecast.list.slice(0, 9)} />
            )}
        </section>
    );
}
