import { useRef, useLayoutEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const carouselStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "200px",
    backgroundColor: "rgb(117, 125, 165)",
    borderRadius: "10px",
    padding: "0 60px",
    margin: "0 20px",
    boxShadow: "0px 0px 30px 8px rgba(0, 0, 0, 0.3)",
    marginBottom: "40px",
    gap: "10px",
    transition: "transform 0.3s ease-out",
};

const weatherCardCarouselStyle = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
};

const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    border: "none",
    outline: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
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

        console.log(index);
    }, [index]);

    function leftButtonHandler() {
        setIndex((prev) => prev - 1);
    }

    function rightButtonHandler() {
        setIndex((prev) => prev + 1);
    }

    // function leftButtonHandler() {
    //     setIndex((prev) => Math.max(prev - 1, 0));
    //     console.log(index);
    // }

    // function rightButtonHandler() {
    //     setIndex((prev) =>
    //         Math.min(
    //             prev + 1,
    //             list.length - carouselRef.current.children.length
    //         )
    //     );

    //     console.log(index);
    // }

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
