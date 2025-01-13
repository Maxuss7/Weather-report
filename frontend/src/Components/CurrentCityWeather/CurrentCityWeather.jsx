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
                    <h1
                        style={{
                            fontWeight: 700,
                            fontSize: "32px",
                            marginBottom: 0,
                        }}
                    >
                        {weather.name}
                    </h1>
                    <div>
                        <p style={{ marginBottom: 0 }}>
                            <span style={{ fontWeight: 700, fontSize: "54px" }}>
                                {weather.main.temp.toFixed(0) == "-0"
                                    ? "0"
                                    : weather.main.temp.toFixed(0)}
                            </span>
                            <sup style={{ fontSize: "40px" }}>℃</sup>
                        </p>
                    </div>
                    <div style={{ fontSize: "22px", textAlign: "center" }}>
                        <p style={{ marginBottom: 0 }}>
                            {weather.weather[0].description}
                        </p>
                        <p style={{ marginTop: 0 }}>
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
