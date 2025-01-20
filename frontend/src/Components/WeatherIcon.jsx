export default function WeatherIcon({ weather }) {
    return (
        <img
            style={{ maxWidth: "40px" }}
            src={`../../img/${weather}.png`}
            alt={weather}
        />
    );
}
