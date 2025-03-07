import { useWeather } from "../Context/WeatherProvider";
import { validTemp } from "../utils";

const currentCityWeatherStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

function CurrentCityWeather() {
    const { weather, locationError } = useWeather();
    console.log(weather)

    if (locationError != "") {
        alert(locationError);
    }

    return (
        <>
            {weather.weather.weather && (
                <section style={currentCityWeatherStyle}>
                    <h1
                        style={{
                            fontWeight: 700,
                            fontSize: "32px",
                            marginBottom: 0,
                        }}
                    >
                        {weather.weather.name}
                    </h1>
                    <div>
                        <p style={{ marginBottom: 0 }}>
                            <span style={{ fontWeight: 700, fontSize: "54px" }}>
                                {validTemp(weather.weather.main.temp)}
                            </span>
                            <sup style={{ fontSize: "40px" }}>℃</sup>
                        </p>
                    </div>
                    <div style={{ fontSize: "22px", textAlign: "center" }}>
                        <p style={{ marginBottom: 0 }}>
                            {weather.weather.weather[0].description
                                .charAt(0)
                                .toUpperCase() +
                                weather.weather.weather[0].description.slice(1)}
                        </p>
                        <p style={{ marginTop: 0 }}>
                            {validTemp(weather.weather.main.temp_min)}° /{" "}
                            {validTemp(weather.weather.main.temp_max)}°
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}

export default CurrentCityWeather;
