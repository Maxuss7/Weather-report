import { useWeather } from "../Context/WeatherProvider";
import WeatherIcon from "./WeatherIcon";

// {forecast.list.forEach((element) => {
//     console.log(
//         new Date(element.dt * 1000)
//             .toLocaleTimeString()
//             .slice(0, 5)
//     );
// })}

const currentCityForecastForDaysStyle = {
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

const daysItemStyle = {
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

function getWeekDay(date) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[[6, 0, 1, 2, 3, 4, 5][date.getDay()]];
}

function getMiddleDay(days) {
    return days.filter(
        (day) =>
            new Date(day.dt * 1000).toLocaleTimeString().slice(0, 5) == "12:00"
    );
}

export default function CurrentCityForecastForDays() {
    const { forecast } = useWeather();

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Forecast for 5 days</h2>
            <section style={currentCityForecastForDaysStyle}>
                {forecast.list &&
                    getMiddleDay(forecast.list).map((day) => (
                        <div style={daysItemStyle} key={day.dt}>
                            <div>
                                {getWeekDay(new Date(day.dt * 1000))}{" "}
                                {new Date(day.dt * 1000)
                                    .toLocaleDateString()
                                    .slice(0, 5)}
                            </div>
                            <div>
                                {day.main.temp.toFixed(0) == "-0"
                                    ? "0"
                                    : day.main.temp.toFixed(0)}
                                °
                            </div>
                            <div>
                                <WeatherIcon
                                    weather={day.weather[0].main.toLowerCase()}
                                />
                            </div>
                            <div>{day.wind.speed} m/s</div>
                        </div>
                    ))}
            </section>
        </>
    );
}
