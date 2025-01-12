const headerStyle = {
    display: "flex",
    frexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#757da5",
    padding: "1rem 0",
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
                    minlength="2"
                    maxlength="16"
                    size="10"
                    placeholder="location"
                />
                <input type="button" value="search" />
            </div>
        </header>
    );
}
