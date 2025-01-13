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
                <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    minLength="2"
                    maxLength="16"
                    size="10"
                    placeholder="location"
                />
                <input type="button" value="search" />
            </div>
        </header>
    );
}
