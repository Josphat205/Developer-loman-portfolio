const menubar = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('nav ul');

menubar.addEventListener('click', () => {
  if (menubar.classList.contains('fa-bars')) {
    nav.classList.toggle('showmenu');
    menubar.classList.replace('fa-bars', 'fa-xmark');
    hero.style.display = 'none';
  } else {
    menubar.classList.replace('fa-xmark', 'fa-bars');
    nav.classList.toggle('showmenu');
    hero.style.display = 'block';
  }
});

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('screen-scroll', window.scrollY > 0);
});