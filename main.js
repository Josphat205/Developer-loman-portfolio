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

nav.addEventListener('click', () => {
  nav.classList.toggle('showmenu');
  nav.style.display = 'hidden';
  menubar.classList.replace('fa-xmark', 'fa-bars');
  hero.style.display = 'block';
});

window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('screen-scroll', window.scrollY > 0);
});

const projects = [
  {
    name: 'Multi-post stories',
    image: 'img/a.jpg',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    technologies: ['Html', 'Css', 'Bootstrap', 'Ruby'],
    liveLink: 'https://josphat205.github.io/SmartDeveloper/',
    githubLink: 'https://github.com/Josphat205/SmartDeveloper',
  },
  {
    name: 'Multi-post stories',
    image: 'img/b.jpg',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    technologies: ['Html', 'Css', 'Bootstrap', 'Ruby'],
    liveLink: 'https://josphat205.github.io/SmartDeveloper/',
    githubLink: 'https://github.com/Josphat205/SmartDeveloper',
  },
  {
    name: 'Multi-post stories',
    image: 'img/c.jpg',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    technologies: ['Html', 'Css', 'Bootstrap', 'Ruby'],
    liveLink: 'https://josphat205.github.io/SmartDeveloper/',
    githubLink: 'https://github.com/Josphat205/SmartDeveloper',
  },
  {
    name: 'Multi-post stories',
    image: 'img/d.jpg',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
    technologies: ['Html', 'Css', 'Bootstrap', 'Ruby'],
    liveLink: 'https://josphat205.github.io/SmartDeveloper/',
    githubLink: 'https://github.com/Josphat205/SmartDeveloper',
  },
];

const demo = document.getElementById('demo');
demo.innerHTML = projects.reduce((output, project) => (
  `${output
  }
  <div class="feature ft3">
    <div class="images img3">
      <img
        src="${project.image}"
        alt="project-image"
      />
    </div>
    <div class="feature-content">
      <h3 class="story-tt">${project.name}</h3>
      <p>
        ${project.description}
      </p>
      <div class="row3 lang">
      ${project.technologies.map((x) => `<h4 class="sk">${x}</h4><span> <img src="img/Rectangle.png" alt="css" /></span>`)}
      </div>
      <button class="btn" id="btnClick" data-open ="mod1" type="button">See Project</button>
    </div>
  </div>
  `
), '');

const closeBtn = document.querySelector('#modal-close');
const btn = document.querySelectorAll('[data-open]');
const popupModal = document.querySelector('#mod1');
const overlay = document.querySelector('.popup-overlay');

btn.forEach((btnC) => {
  btnC.addEventListener('click', () => {
    popupModal.style.display = 'block';
    overlay.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
  overlay.style.display = 'none';
});

const nameError = document.querySelector('.fname-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');
const submitError = document.querySelector('.submit-error');
const successN = document.querySelector('#successN');
const successE = document.querySelector('#successE');
const successM = document.querySelector('#successM');

function validateName() {
  const nameVal = document.querySelector('#fname').value;
  if (nameVal.length === 0) {
    nameError.innerHTML = 'FullName is Required';
    successN.innerHTML = '';
    return false;
  }
  if (!nameVal.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
    nameError.innerHTML = 'Please Enter Fullnames';
    successN.innerHTML = '';
    return false;
  }
  nameError.innerHTML = '';
  successN.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const emailVal = document.querySelector('#email').value;
  if (emailVal.length === 0) {
    emailError.innerHTML = 'Email is Required';
    successE.innerHTML = '';
    return false;
  }

  if (!emailVal.match(/^[a-z+|]+@+[a-z\-0-9]+(.com)$/i)) {
    emailError.innerHTML = 'Enter valid Email';
    successE.innerHTML = '';
    return false;
  }
  emailError.innerHTML = '';
  successE.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  const messageVal = document.querySelector('#message').value;
  const required = 30;
  const left = required - messageVal.length;
  if (left > 0) {
    messageError.innerHTML = `${left} More characters is Required`;
    successE.innerHTML = ' ';
    return false;
  }
  messageError.innerHTML = '';
  successM.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix the errors first before submit';
    setTimeout(() => { submitError.style.display = 'none'; }, 3000);
    return false;
  }
  return true;
}
validateForm();