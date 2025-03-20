import { useWeather } from "../Context/WeatherProvider";
import WeatherCardCarousel from "./WeatherCardCarousel.jsx";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";

export default function CurrentCityForecastForDay() {
    const { forecast } = useWeather();

    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };
    return (
        <section>
            <h2 style={{ textAlign: "center" }}>Прогноз на 24 часа</h2>

            <Swiper {...params}>
                {forecast.list && (
                    <WeatherCardCarousel list={forecast.list.slice(0, 9)} />
                )}
            </Swiper>
        </section>
    );
}
