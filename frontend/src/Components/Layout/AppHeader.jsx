import SearchLocation from "../SearchLocation";

const headerStyle = {
    height: "4rem",
    display: "flex",
    frexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#757da5",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "1",
};

export default function AppHeader() {
    return (
        <header style={headerStyle}>
            <div style={{ fontSize: "2rem" }}>Weather App</div>
            <div>
                <SearchLocation />
            </div>
        </header>
    );
}
