import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import { useWeather } from "../../Context/WeatherProvider";

export default function AppLayot() {
    const { loading } = useWeather();

    if (loading) {
        return (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                }}
            >
                Loading...
            </div>
        );
    }

    return (
        <>
            <AppHeader />
            <AppContent />
        </>
    );
}
