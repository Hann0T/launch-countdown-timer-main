import countdown from "./countdown.js";

const output = document.querySelector(".countdown__text");

const count = new countdown(
    { days: 8, hours: 23, minutes: 55, seconds: 41 },
    output
);

setInterval(count.updateScreen.bind(count), 1000);
