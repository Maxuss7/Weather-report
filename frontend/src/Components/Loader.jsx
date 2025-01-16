const loaderStyle = {
    color: "rgb(117, 125, 165)",
    backgroundColor: "rgb(131, 144, 211)",
    height: "100vh",
    weight: "100wh",
    fontSize: "50px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

function Loader() {
    return <div style={loaderStyle}>Loading...</div>;
}

export default Loader;
