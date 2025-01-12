import WeatherContextProvider from "./Context/WeatherProvider";
import AppLayot from "./Components/Layout/AppLayout";

function App() {
    return (
        <>
            <WeatherContextProvider>
                <AppLayot />
            </WeatherContextProvider>
        </>
    );
}

export default App;
