const aboutBtn = document.querySelector('#about-btn');
let moreAboutMe = document.querySelector('.more-about-me');

function show() {
  moreAboutMe.classList.toggle('show');
}

aboutBtn.addEventListener('click', () => {
  show();
});
