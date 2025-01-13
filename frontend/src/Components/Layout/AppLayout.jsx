import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import { useWeather } from "../../Context/WeatherProvider";

export default function AppLayot() {
    const { loading } = useWeather();

    if (loading) {
        return (
            <p
                style={{
                    fontSize: "50px",
                    fontWeight: "700",
                    // position: "absolute",
                    // top: "50%",
                    // left: "50%",
                }}
            >
                Loading...
            </p>
        );
    }

    return (
        <>
            <AppHeader />
            <AppContent />
        </>
    );
}
