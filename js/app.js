const aboutBtn = document.querySelector('#about-btn');
let moreAboutMe = document.querySelector('.more-about-me');
const nav = document.querySelector('nav');
const sectionOne = document.querySelector('.home-intro');
const aboutMe = document.querySelector('#about-me');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

//---------

function show() {
  moreAboutMe.classList.toggle('show');
}

aboutBtn.addEventListener('click', () => {
  show();
});

// ----------Scroll---------------------

//------------Nav bar scroll

const sectionOneOptions = {
  rootMargin: '-100px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add('nav-container');
    } else {
      nav.classList.remove('nav-container');
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const options = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const portfolioOptions = {
  threshold: 0,
  rootMargin: '0px 0px -20px 0px',
};

const portfolioOnScroll = new IntersectionObserver(function (
  entries,
  portfolioOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      portfolioOnScroll.unobserve(entry.target);
    }
  });
},
portfolioOptions);

sliders.forEach((slider) => {
  portfolioOnScroll.observe(slider);
});

const hamburgermenu = document.querySelector('.navbar-toggler-icon');
const avatar = document.querySelector('.me');
const speech = document.querySelector('.speech');
const header = document.querySelector('header');

function display() {
  if (avatar.style.display === 'none' && speech.style.display === 'none') {
    avatar.style.display = 'block';
    speech.style.display = 'block';
  } else {
    avatar.style.display = 'none';
    speech.style.display = 'none';
  }
}

hamburgermenu.addEventListener('click', () => {
  display();
});
