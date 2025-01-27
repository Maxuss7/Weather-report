import { useState } from "react";
import { useWeather } from "../Context/WeatherProvider";

const buttonStyle = {
    backgroundColor: "rgb(131, 144, 211)",
    color: "white",
    border: "none",
    borderRadius: "0 10px 10px 0",
    height: "2rem",
    fontSize: "1rem",
};

const inputStyle = {
    height: "2rem",
    border: "none",
    borderRadius: "10px 0 0 10px",
    fontSize: "1rem",
};

function SearchLocation() {
    const [value, setValue] = useState("");
    const { getWeather } = useWeather();

    function changeHandler(event) {
        setValue(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        getWeather(event.target.children[0].value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                id="location"
                type="text"
                required
                minLength="2"
                maxLength="50"
                size="10"
                placeholder="Локация"
                value={value}
                onChange={changeHandler}
                style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>
                Поиск
            </button>
        </form>
    );
}

export default SearchLocation;
