import React, { useRef, useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

const weatherCardCarouselStyle = {
    maxWidth: "100%",
    backgroundColor: "rgb(117, 125, 165)",
    boxShadow: "0px 0px 30px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    marginBottom: "50px",
    height: "180px",
    padding: "10px",
};

function WeatherCardCarousel({ list, isDay }) {
    const divRef = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(divRef.current.offsetWidth);
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={weatherCardCarouselStyle} ref={divRef}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={width > 600 ? 40 : 20}
                slidesPerView={width / 140}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {list.map((day, index) => (
                    <SwiperSlide key={index}>
                        <WeatherCard day={day} isDay={isDay} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default WeatherCardCarousel;
