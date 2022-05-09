document.querySelector('#menu').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('showmenu');
});

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('screen-scroll', window.scrollY > 0);
});