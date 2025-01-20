import { useWeather } from "../Context/WeatherProvider";
import { getMiddleDay } from "../utils";
import WeatherCardCarousel from "./WeatherCardCarousel";

export default function CurrentCityForecastForDays() {
    const { forecast } = useWeather();

    return (
        <section>
            <h2 style={{ textAlign: "center" }}>Forecast for 5 days</h2>
            {forecast.list && (
                <WeatherCardCarousel
                    list={getMiddleDay(forecast.list)}
                    isDay={true}
                />
            )}
        </section>
    );
}
