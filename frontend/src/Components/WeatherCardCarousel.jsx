import WeatherCard from "./WeatherCard";

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

function WeatherCardCarousel({ list, isDay }) {
    return (
        <div style={currentCityForecastForDayStyle}>
            {list.map((day) => (
                <WeatherCard day={day} isDay={isDay} key={day.dt} />
            ))}
        </div>
    );
}

export default WeatherCardCarousel;
