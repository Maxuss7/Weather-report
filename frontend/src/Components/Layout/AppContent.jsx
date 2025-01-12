import CurrentCityWeather from "../CurrentCityWeather/CurrentCityWeather";

const appContentStyle = {
    backgroundColor: "rgb(131 144 211)",
    height: "calc(100vh - 3rem)",
};

export default function AppContent() {
    return (
        <>
            <main style={appContentStyle}>
                <CurrentCityWeather />
            </main>
        </>
    );
}
