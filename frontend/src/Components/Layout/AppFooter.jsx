import CurrentCitySunState from "../CurrentCitySunState";
const footerStyle = {
    height: "240px",
    backgroundColor: "rgb(117, 125, 165)",
};

export default function AppFooter() {
    return (
        <footer style={footerStyle}>
            <CurrentCitySunState />
        </footer>
    );
}
