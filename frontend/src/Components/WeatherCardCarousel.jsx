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
        if (divRef.current) {
            setWidth(divRef.current.offsetWidth);
        }
    }, []);

    return (
        <div style={weatherCardCarouselStyle} ref={divRef}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={width / 130}
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
