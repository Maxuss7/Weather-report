import { useWeather } from "../Context/WeatherProvider";
import { validTime } from "../utils";

const sunStyle = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: "-1",
};

const shadowStyle = {
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: "-1",
};

export default function CurrentCitySunState() {
    const { weather } = useWeather();
    return (
        <>
            {weather.sys && (
                <section className="sunFlex">
                    <div>
                        <p>Sunrise</p>
                        <p>{validTime(weather.sys.sunrise, false)}</p>
                        <img
                            className="sun"
                            src="../../img/sunrise.png"
                            alt="sun"
                            style={sunStyle}
                        ></img>
                        <div
                            style={{
                                ...shadowStyle,
                                boxShadow:
                                    "0px -60px 100px 70px rgba(236, 255, 0, 0.5)",
                            }}
                        ></div>
                    </div>
                    <div>
                        <p>Sunset</p>
                        <p>{validTime(weather.sys.sunset, false)}</p>
                        <img
                            className="sun"
                            src="../../img/sunset.png"
                            alt="sun"
                            style={sunStyle}
                        ></img>
                        <div
                            style={{
                                ...shadowStyle,
                                boxShadow:
                                    "0px -60px 100px 70px rgba(255, 150, 0, 0.5)",
                            }}
                        ></div>
                    </div>
                </section>
            )}
        </>
    );
}
