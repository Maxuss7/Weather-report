import { useWeather } from "../Context/WeatherProvider";
import { validTemp, validTime } from "../utils.js";
import WeatherIcon from "./WeatherIcon";

const currentCityForecastForDayStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "200px",
    backgroundColor: "rgb(117, 125, 165)",
    borderRadius: "10px",
    padding: "0 20px",
    margin: "0 20px",
    overflowX: "auto",
    boxShadow: "0px 0px 30px 8px rgba(0, 0, 0, 0.3)",
    marginBottom: "40px",
};

const dayItemStyle = {
    backgroundColor: "rgb(131, 144, 211)",
    height: "80%",
    minWidth: "100px",
    maxWidth: "100px",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-between",
    marginRight: "10px",
    marginLeft: "10px",
};

export default function CurrentCityForecast() {
    const { forecast } = useWeather();
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Forecast for 24h</h2>
            <section style={currentCityForecastForDayStyle}>
                {forecast.list &&
                    forecast.list.slice(0, 9).map((day) => {
                        return (
                            <div style={dayItemStyle} key={day.dt}>
                                <div>{validTemp(day.main.temp)}°</div>
                                <div>
                                    <WeatherIcon
                                        weather={day.weather[0].main.toLowerCase()}
                                    />
                                </div>
                                <div>{day.wind.speed} m/s</div>
                                <div>{validTime(day.dt, false)}</div>
                            </div>
                        );
                    })}
            </section>
        </>
    );
}
