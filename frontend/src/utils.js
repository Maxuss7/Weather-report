export function validTemp(temp) {
    if (temp.toFixed(0) === "-0") {
        return "0";
    }
    return temp.toFixed(0);
}

export function validTime(data, isDay) {
    const time = new Date(data * 1000).toLocaleTimeString().slice(0, 5);
    const day = new Date(data * 1000).toLocaleDateString().slice(0, 5);

    if (time === "00:00" || isDay) {
        return day;
    }

    return time;
}

export function getMiddleDay(days) {
    return days.filter(
        (day) =>
            new Date(day.dt * 1000).toLocaleTimeString().slice(0, 5) == "12:00"
    );
}

export function getWeekDay(date) {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[[6, 0, 1, 2, 3, 4, 5][date.getDay()]];
}
