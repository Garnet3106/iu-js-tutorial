let isDark = false;

window.addEventListener('load', onLoad);

function onLoad() {
  const themeBtn = document.getElementById('themeBtn');
  themeBtn.addEventListener('click', onClickThemeBtn);
}

function onClickThemeBtn() {
  /* 次の行から「現在のテーマを判断してテーマを反転する処理」を書きましょう */

}

function setTheme(setTo) {
  isDark = setTo;
  document.body.className = setTo ? 'dark-theme' : 'light-theme';
}
