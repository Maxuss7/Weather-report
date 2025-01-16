import SearchLocation from "../SearchLocation";

const headerStyle = {
    height: "3rem",
    display: "flex",
    frexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#757da5",
};

export default function AppHeader() {
    return (
        <header style={headerStyle}>
            <div>Weather App</div>
            <div>
                <SearchLocation />
            </div>
        </header>
    );
}
