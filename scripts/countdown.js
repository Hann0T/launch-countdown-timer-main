export default class countdown {
  constructor(time, where) {
    this.time = { ...time };
    this.resetTime = { ...this.time };
    this.where = where;
  }
  updateCountdown() {
    if (
      this.time.days === 0 &&
      this.time.hours === 0 &&
      this.time.minutes === 0 &&
      this.time.seconds === 0
    ) {
      this.time = { ...this.resetTime };
      return;
    }
    if (this.time.seconds >= 0) {
      this.time.seconds--;
    }
    if (this.time.seconds <= -1 && this.time.minutes > -1) {
      this.time.seconds = 60;
      this.time.minutes--;
    }
    if (this.time.minutes <= -1 && this.time.hours > -1) {
      this.time.minutes = 60;
      this.time.hours--;
    }
    if (this.time.hours <= -1 && this.time.days > 0) {
      this.time.hours = 24;
      this.time.days--;
      return;
    }
  }
  updateScreen() {
    this.updateCountdown();
    let { days, hours, minutes, seconds } = this.time;
    this.where.innerHTML = `
            <span class="card">
                <span id="bg-dark"></span>
                <span id="number">${this.fixFormat(days)}</span>
                <span id="indicator">Days</span>
            </span>
            <span class="card">
                <span id="bg-dark"></span>
                <span id="number">${this.fixFormat(hours)}</span>
                <span id="indicator">Horus</span>
            </span>
            <span class="card">
                <span id="bg-dark"></span>
                <span id="number">${this.fixFormat(minutes)}</span>
                <span id="indicator">Minutes</span>
            </span>
            <span class="card">
                <span id="bg-dark" class="flip-card"></span>
                <span id="number">${this.fixFormat(seconds)}</span>
                <span id="indicator">Seconds</span>
            </span>`;
  }
  fixFormat(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }
  flipCard(card) {
    card.classList.add("flip-card");
  }
}
