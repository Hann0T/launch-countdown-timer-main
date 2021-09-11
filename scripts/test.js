const countdown = document.querySelector(".countdown__text");

let time = {
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 10,
};

const resetTime = {
    ...time,
};

const updateCountdown = () => {
    if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
    ) {
        time = { ...resetTime };
        return;
    }
    if (time.seconds >= 0) {
        time.seconds--;
    }
    if (time.seconds <= -1 && time.minutes > -1) {
        time.seconds = 60;
        time.minutes--;
    }
    if (time.minutes <= -1 && time.hours > -1) {
        time.minutes = 60;
        time.hours--;
    }
    if (time.hours <= -1 && time.days > 0) {
        time.hours = 24;
        time.days--;
        return;
    }
};

const updateScreen = () => {
    updateCountdown();
    countdown.textContent = `${fixFormat(time.days)} ${fixFormat(
        time.hours
    )} ${fixFormat(time.minutes)} ${fixFormat(time.seconds)}`;
};

const fixFormat = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
};

setInterval(updateScreen, 1000);
