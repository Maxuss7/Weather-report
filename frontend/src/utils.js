export function validTemp(temp) {
    if (temp.toFixed(0) === "-0") {
        return "0";
    }
    return temp.toFixed(0);
}

export function validTime(data) {
    const time = new Date(data * 1000).toTimeString().slice(0, 5);
    return time;
}

export function getMiddleDay(days) {
    return days.filter(
        (day) =>
            new Date(day.dt * 1000).toLocaleTimeString().slice(0, 5) == "12:00"
    );
}

export function getWeekDay(date) {
    const days = [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье",
    ];
    return days[[6, 0, 1, 2, 3, 4, 5][date.getDay()]];
}
