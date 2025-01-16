import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import { useWeather } from "../../Context/WeatherProvider";
import Loader from "../Loader";

export default function AppLayot() {
    const { loading } = useWeather();

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <AppHeader />
            <AppContent />
            <AppFooter />
        </>
    );
}
