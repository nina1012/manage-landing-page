//slider
const circles = document.querySelectorAll('.circle');
const sliderItems = document.querySelectorAll('.slider__item');
const slider = document.querySelector('.slider');
//toggle
const toggleBtn = document.querySelector('#toggle-btn');
const icon = document.querySelector('label > .hamburger-image');
const list = document.querySelector('.nav__list');

window.addEventListener('resize', resizingWindow);

function resizingWindow(e) {
  if (window.innerWidth < 600) {
    sliderItems.forEach(item => (item.style.display = 'none'));
  } else if (window.innerWidth > 600) {
    sliderItems.forEach(item => (item.style.display = 'block'));
    const indexOfItem = e.target.dataset.position;
    slider.style.left = sliderItems[indexOfItem].dataset.left;
  }
}

circles.forEach(circle => {
  circle.addEventListener('click', e => {
    const position = e.target.dataset.position;
    resizingWindow(e);
    sliderItems[position].style.display = 'block';
    circles.forEach(circle => circle.classList.remove('full-circle'));
    circles[position].classList.add('full-circle');
  });
});

//toggling menu and shadow on header
toggleBtn.addEventListener('click', e => {
  document.querySelector('.overlay').classList.toggle('shadow');
  toggleBtn.checked
    ? icon.setAttribute('src', 'images/icon-close.svg')
    : icon.setAttribute('src', 'images/icon-hamburger.svg');
});
