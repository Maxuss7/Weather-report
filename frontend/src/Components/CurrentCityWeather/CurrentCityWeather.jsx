import { useWeather } from "../../Context/WeatherProvider";

function CurrentCityWeather() {
    const { weather, forecast, loading, locationError } = useWeather();

    return (
        <>
            <p>ffffff</p>
        </>
    );
}

export default CurrentCityWeather;
