import { useWeather } from "../../Context/WeatherProvider";

const currentCityWeatherStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

function CurrentCityWeather() {
    const { weather, forecast, loading, locationError } = useWeather();
    console.log(weather);

    return (
        <>
            {weather.name && (
                <section style={currentCityWeatherStyle}>
                    <p>{weather.name}</p>
                    <div>
                        <h1>{weather.main.temp.toFixed(0)}℃</h1>
                    </div>
                    <div>
                        <h2>
                            {weather.main.temp_min.toFixed(0)}℃ /{" "}
                            {weather.main.temp_max.toFixed(0)}℃
                        </h2>
                    </div>
                </section>
            )}
        </>
    );
}

export default CurrentCityWeather;
