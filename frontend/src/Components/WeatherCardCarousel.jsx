import { useRef, useLayoutEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const carouselStyle = {
    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "calc((100% / 6) - 12px)",
    alignItems: "center",
    height: "200px",
    transition: "transform 0.3s ease-out",
    overflow: "hidden",
};

const weatherCardCarouselStyle = {
    position: "relative",
    width: "100%",
    backgroundColor: "rgb(117, 125, 165)",
    boxShadow: "0px 0px 30px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    marginBottom: "50px",
};

const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    border: "none",
    outline: "none",
    borderRadius: "10",
    width: "40px",
    height: "80px",
    fontSize: "24px",
    cursor: "pointer",
};

function WeatherCardCarousel({ list, isDay }) {
    const [index, setIndex] = useState(0);
    const carouselRef = useRef(null);

    useLayoutEffect(() => {
        if (!carouselRef.current) return;

        const cardWidth = carouselRef.current.children[0].clientWidth;
        carouselRef.current.style.transform = `translateX(${
            -index * cardWidth
        }px)`;
    }, [index]);

    // function leftButtonHandler() {
    //     setIndex((prev) => prev - 2);
    // }

    // function rightButtonHandler() {
    //     setIndex((prev) => prev + 2);
    // }

    function leftButtonHandler() {
        setIndex((prev) => Math.max(prev - 1, 0));
    }

    function rightButtonHandler() {
        setIndex((prev) =>
            Math.min(prev + 1, carouselRef.current.children.length - prev + 1)
        );
    }

    return (
        <div style={weatherCardCarouselStyle}>
            <div ref={carouselRef} style={carouselStyle}>
                {list.map((day) => (
                    <WeatherCard day={day} isDay={isDay} key={day.dt} />
                ))}
            </div>
            <button
                style={{ ...buttonStyle, left: "10px" }}
                onClick={leftButtonHandler}
            >
                {"<"}
            </button>
            <button
                style={{ ...buttonStyle, right: "10px" }}
                onClick={rightButtonHandler}
            >
                {">"}
            </button>
        </div>
    );
}

export default WeatherCardCarousel;
