const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  background: document.querySelector('body'),
  btnStart: document.querySelector('[data-action=start]'),
  btnStop: document.querySelector('[data-action=stop]'),
};

const BACKGROUND_DALAY = 1000;
let timeoutId = null;

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBackgroundColor() {
  let randomIndex = randomIntegerFromInterval(0, colors.length - 1);
  refs.background.style.backgroundColor = colors[randomIndex];
}

function onStartClick() {
  changeBackgroundColor();
  refs.btnStart.setAttribute('disabled', true);
  timeoutId = setInterval(() => {
    changeBackgroundColor();
  }, BACKGROUND_DALAY);
}

function onStopClick() {
  clearInterval(timeoutId);
  refs.btnStart.removeAttribute('disabled');
}
