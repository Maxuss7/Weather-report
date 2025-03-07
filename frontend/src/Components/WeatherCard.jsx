import WeatherIcon from "./WeatherIcon";
import { validTemp, validTime, getWeekDay } from "../utils";

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
    flexShrink: "0",
};

function WeatherCard({ day, isDay }) {
    return (
        <div style={dayItemStyle}>
            <div>
                {isDay && day.small_date_russian}
                <br />
                {day.time}
            </div>
            <div>{validTemp(day.main.temp)}°</div>
            <div>
                <WeatherIcon weather={day.weather[0].main.toLowerCase()} />
            </div>
            <div>{day.wind.speed} м/с</div>
        </div>
    );
}

export default WeatherCard;
