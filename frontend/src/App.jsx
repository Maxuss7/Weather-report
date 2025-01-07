import "./App.css";
import WeatherContextProvider from "./Context/WeatherProvider";
import Intro from "./Components/Intro/Intro";
import CurrentCityWeather from "./Components/CurrentCityWeather/CurrentCityWeather";

function App() {
    return (
        <>
            <WeatherContextProvider>
                <Intro />
                <CurrentCityWeather />
            </WeatherContextProvider>
        </>
    );
}

export default App;
