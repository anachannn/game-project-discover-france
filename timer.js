class Timer {
  constructor(timeLimit) {
    this.timeLimit = timeLimit;
    this.timePassed = 0;
    this.timeLeft = this.timeLimit;
    this.timerInterval = null;
    this.fullDashArray = 283;
    let app = document.querySelector("#app");
    app.innerHTML =`<div class="base-timer">
                    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g class="base-timer__circle">
                         <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                         <path
                            id="base-timer-path-remaining"
                            stroke-dasharray="283"
                            class="base-timer__path-remaining"
                            d="
                            M 50, 50
                            m -45, 0
                            a 45,45 0 1,0 90,0
                            a 45,45 0 1,0 -90,0
                            "
                         ></path>
                        </g>
                    </svg>
                    <span id="base-timer-label" class="base-timer__label"></span>
                   </div>`;
  };

  onTimesUp() {
    clearInterval(this.timerInterval);
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.timeLimit;
    return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
  }

  setcircleDasharray() {
    const circleDasharray = (
      this.calculateTimeFraction() * this.fullDashArray
    ).toFixed(0);
    let baseTimerPath = document.querySelector("#base-timer-path-remaining");
    baseTimerPath.setAttribute("stroke-dasharray", `${circleDasharray}, 283`);
  }

  startTimer() {
    let timerapp = document.querySelector(".base-timer");
    timerapp.style.display = "block";

    this.timerInterval = setInterval(() => {
      this.timePassed += 1;
      this.timeLeft = this.timeLimit - this.timePassed;
      let baseTimer = document.querySelector("#base-timer-label");
      baseTimer.innerHTML = `${this.formatTime(this.timeLeft)}`;

      this.setcircleDasharray();

      if (this.timeLeft === 0) {
        this.onTimesUp();
        let timesuppopup = document.querySelector(".wrongChoiceTimesup");
        timesuppopup.style.display = "block";
      }
    }, 1000);
  }

  formatTime(time) {
    const minutes = Math.floor(time / 60);

    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  // resetTimer(){

  //     this.onTimesUp();

  //     this.timeLeft = this.timeLimit
  //     this.timePassed = 0;

  //     this.startTimer();

  // };
}
