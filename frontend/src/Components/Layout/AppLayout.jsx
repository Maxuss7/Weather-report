import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import { useWeather } from "../../Context/WeatherProvider";

export default function AppLayot() {
    const { loading } = useWeather();

    if (loading) {
        return (
            <div
                style={{
                    color: "rgb(117, 125, 165)",
                    backgroundColor: "rgb(131, 144, 211)",
                    height: "100vh",
                    weight: "100wh",
                    fontSize: "50px",
                    fontWeight: "700",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
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
            <AppFooter />
        </>
    );
}
