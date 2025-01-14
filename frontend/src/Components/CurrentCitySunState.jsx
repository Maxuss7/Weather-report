import { useWeather } from "../Context/WeatherProvider";

const sunStateStyle = {
    display: "flex",
    flexDiraction: "row",
    padding: "1rem",
};

const sunStateItemStyle = {
    backgroundColor: "rgb(131, 144, 211)",
    borderRadius: "10px",
    textAlign: "center",
    width: "100%",
    height: "200px",
    margin: "0 1rem",
    position: "relative",
    zIndex: "0",
};

const sunriseStyle = {
    position: "absolute",
    maxWidth: "250px",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: "-1",
};

const sunsetStyle = {
    position: "absolute",
    maxWidth: "250px",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: "-1",
};

const shadowriseStyle = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: "-1",
    boxShadow: "0px -60px 100px 100px rgba(236, 255, 0, 0.5)",
};

const shadowsetStyle = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: "-1",
    boxShadow: "0px -60px 100px 100px rgba(255, 150, 0, 0.5)",
};

export default function CurrentCitySunState() {
    const { weather } = useWeather();
    return (
        <>
            {weather.sys && (
                <section style={sunStateStyle}>
                    <div style={sunStateItemStyle}>
                        <p>Sunrise</p>
                        <p>
                            {new Date(weather.sys.sunrise * 1000)
                                .toLocaleTimeString()
                                .slice(0, 5)}
                        </p>
                        <img
                            src="../../public/img/sunrise.png"
                            alt="sun"
                            style={sunriseStyle}
                        ></img>
                        <div style={shadowriseStyle}></div>
                    </div>
                    <div style={sunStateItemStyle}>
                        <p>Sunset</p>
                        <p>
                            {new Date(weather.sys.sunset * 1000)
                                .toLocaleTimeString()
                                .slice(0, 5)}
                        </p>
                        <img
                            src="../../public/img/sunset.png"
                            alt="sun"
                            style={sunsetStyle}
                        ></img>
                        <div style={shadowsetStyle}></div>
                    </div>
                </section>
            )}
        </>
    );
}
