let isDark = false;
let counting = false;
let time = 0;

window.addEventListener('load', onLoad);

function onLoad() {
  const themeBtn = document.getElementById('themeBtn');
  themeBtn.addEventListener('click', onClickThemeBtn);
  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', onClickStartBtn);
  const stopBtn = document.getElementById('stopBtn');
  stopBtn.addEventListener('click', onClickStopBtn);
}

function onClickThemeBtn() {
  let setTo;
  if (isDark) {
    setTo = false;
  } else {
    setTo = true;
  }
  setTheme(setTo);
}

function setTheme(setTo) {
  isDark = setTo;
  document.body.className = setTo ? 'dark-theme' : 'light-theme';
}

function onClickStartBtn() {
  /* 次の行から「カウントを開始する処理」を書きましょう */

}

function onClickStopBtn() {
  /* 次の行から「カウントを停止する処理」を書きましょう */

}

function countUp() {
  /* 次の行から「時間を0.1秒ずつ加算する処理」を書きましょう */

}

setInterval(() => {
  if (counting) {
    countUp();
    const timeElem = document.getElementById('time');
    /* 次の行から「文字列を連結して変数に代入する処理」を書きましょう */

    timeElem.innerText = timeText;
  }
}, 1000);
