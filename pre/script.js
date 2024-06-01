let count = 0;

window.addEventListener('load', () => {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', onClickBtn);
});

function onClickBtn() {
  count += 1;
  const countElem = document.getElementById('count');
  countElem.innerText = `${count}回`;
}
