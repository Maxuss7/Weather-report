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
                    <h1 style={{ fontWeight: 700, fontSize: "32px" }}>
                        {weather.name}
                    </h1>
                    <div>
                        <p>
                            <span style={{ fontWeight: 700, fontSize: "36px" }}>
                                {weather.main.temp.toFixed(0) == "-0"
                                    ? "0"
                                    : weather.main.temp.toFixed(0)}
                            </span>
                            <sup style={{ fontSize: "28px" }}>℃</sup>
                        </p>
                    </div>
                    <div>
                        <p style={{ fontSize: "28px" }}>
                            {weather.main.temp_min.toFixed(0) == "-0"
                                ? "0"
                                : weather.main.temp_min.toFixed(0)}
                            ° /{" "}
                            {weather.main.temp_max.toFixed(0) == "-0"
                                ? "0"
                                : weather.main.temp_max.toFixed(0)}
                            °
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}

export default CurrentCityWeather;
