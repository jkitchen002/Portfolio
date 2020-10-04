const aboutBtn = document.querySelector('#about-btn');
let moreAboutMe = document.querySelector('.more-about-me');

function show() {
  moreAboutMe.classList.toggle('show');
}

aboutBtn.addEventListener('click', () => {
  show();
});

// ----------Scroll---------------------
const aboutMe = document.querySelector('#about-me');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const portfolioOptions = {
  threshold: 0,
  rootMargin: '0px 0px -20px 0px',
};

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
