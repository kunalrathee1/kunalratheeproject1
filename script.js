
const flipBtn = document.getElementById('flipBtn');
const colorCode = document.getElementById('colorCode');

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
  return `#${hex}`;
}

flipBtn.addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  colorCode.textContent = newColor;
});
