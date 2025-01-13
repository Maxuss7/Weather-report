import { useWeather } from "../Context/WeatherProvider";

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// let date = new Date();
// let dayWeek = days[[6, 0, 1, 2, 3, 4, 5][date.getDay()]];
// console.log(dayWeek);

// {forecast.list.forEach((element) => {
//     console.log(
//         new Date(element.dt * 1000)
//             .toLocaleTimeString()
//             .slice(0, 5)
//     );
// })}

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
    marginRight: "20px",
};

export default function CurrentCityForecast() {
    const { forecast } = useWeather();
    console.log(forecast);
    return (
        <section style={currentCityForecastForDayStyle}>
            {forecast.list &&
                forecast.list.slice(0, 9).map((day) => {
                    return (
                        <div style={dayItemStyle} key={day.dt}>
                            <div>{day.main.temp.toFixed(0)}°</div>
                            <div>{day.weather[0].main}</div>
                            <div>{day.wind.speed} m/s</div>
                            <div>
                                {new Date(day.dt * 1000)
                                    .toLocaleTimeString()
                                    .slice(0, 5) === "00:00"
                                    ? new Date(day.dt * 1000)
                                          .toLocaleDateString()
                                          .slice(0, 5)
                                    : new Date(day.dt * 1000)
                                          .toLocaleTimeString()
                                          .slice(0, 5)}
                            </div>
                        </div>
                    );
                })}
        </section>
    );
}
