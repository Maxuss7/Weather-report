import { useWeather } from "../Context/WeatherProvider";

const currentCityForecastForDayStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "200px",
    backgroundColor: "rgb(117, 125, 165)",
    borderRadius: "10px",
    padding: "0 20px",
    margin: "0 20px",
};

const dayItemStyle = {
    backgroundColor: "rgb(131, 144, 211)",
    height: "80%",
    borderRadius: "10px",
    padding: "10px",
};

export default function CurrentCityForecast() {
    const { forecast } = useWeather();
    console.log(forecast);
    return (
        <>
            {forecast.list && (
                <section style={currentCityForecastForDayStyle}>
                    <div style={dayItemStyle}>
                        erfref
                        {/* {forecast.list.forEach((element) => {
                            console.log(
                                new Date(element.dt * 1000)
                                    .toLocaleTimeString()
                                    .slice(0, 5)
                            );
                        })} */}
                    </div>
                </section>
            )}
        </>
    );
}
