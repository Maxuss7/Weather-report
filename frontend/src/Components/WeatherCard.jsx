import WeatherIcon from "./WeatherIcon";
import { validTemp } from "../utils";

const dayItemStyle = {
    backgroundColor: "rgb(131, 144, 211)",
    height: "160px",
    width: "100px",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-between",
};

function WeatherCard({ day, isDay }) {
    return (
        <div style={dayItemStyle}>
            <div>
                {isDay || day.time === "00:00"
                    ? day.small_date_russian
                    : day.time}
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
