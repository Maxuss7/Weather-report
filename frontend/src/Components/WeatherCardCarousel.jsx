import { useRef, useLayoutEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const carouselStyle = {
    display: "grid",
    gridAutoFlow: "column",
    placeItems: "center",
    height: "200px",
    transition: "transform 0.3s ease-out",
};

const weatherCardCarouselStyle = {
    position: "relative",
    maxWidth: "100%",
    backgroundColor: "rgb(117, 125, 165)",
    boxShadow: "0px 0px 30px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    marginBottom: "50px",
    padding: "0 60px",
    overflow: "hidden",
};

const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    width: "40px",
    height: "80px",
    fontSize: "24px",
    cursor: "pointer",
};

function WeatherCardCarousel({ list, isDay }) {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const carouselRef = useRef(null);

    useLayoutEffect(() => {
        if (!carouselRef.current) return;

        setWidth(carouselRef.current.clientWidth);
        setMaxIndex(
            carouselRef.current.clientWidth /
                carouselRef.current.children[0].clientWidth
        );

        console.log(
            carouselRef.current.children.length -
                (
                    carouselRef.current.clientWidth /
                    carouselRef.current.children[0].clientWidth
                ).toFixed(0) +
                3
        );

        const cardWidth = carouselRef.current.children[0].clientWidth;
        carouselRef.current.style.transform = `translateX(${
            -index * cardWidth
        }px)`;
    }, [index]);

    function leftButtonHandler() {
        setIndex((prev) => Math.max(prev - 1, 0));
    }

    function rightButtonHandler() {
        setIndex((prev) =>
            Math.min(
                prev + 1,
                carouselRef.current.children.length -
                    (
                        carouselRef.current.clientWidth /
                        carouselRef.current.children[0].clientWidth
                    ).toFixed(0) +
                    3
            )
        );
    }

    return (
        <div style={weatherCardCarouselStyle}>
            <div ref={carouselRef} className="carousel" style={carouselStyle}>
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
