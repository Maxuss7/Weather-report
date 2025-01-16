import CurrentCityWeather from "../CurrentCityWeather";
import CurrentCityForecastForDay from "../CurrentCityForecastForDay";
import CurrentCityForecastForDays from "../CurrentCityForecastForDays";

const appContentStyle = {
    backgroundColor: "rgb(131 144 211)",
    padding: "1rem 4rem",
};

export default function AppContent() {
    return (
        <>
            <main style={appContentStyle}>
                <CurrentCityWeather />
                <CurrentCityForecastForDay />
                <CurrentCityForecastForDays />
            </main>
        </>
    );
}
