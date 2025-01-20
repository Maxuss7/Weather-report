import CurrentCityWeather from "../CurrentCityWeather";
import CurrentCityForecastForDay from "../CurrentCityForecastForDay";
import CurrentCityForecastForDays from "../CurrentCityForecastForDays";

export default function AppContent() {
    return (
        <>
            <main>
                <CurrentCityWeather />
                <CurrentCityForecastForDay />
                <CurrentCityForecastForDays />
            </main>
        </>
    );
}
