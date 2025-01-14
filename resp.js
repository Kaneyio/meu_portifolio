const header = document.querySelector('header');
const headerManager = document.querySelector('.header-manager');
const logo = document.querySelector('#logo');
const sections = document.querySelectorAll('section');
const logos = document.querySelector('.logos');

headerManager.addEventListener('click', () => {
  header.classList.toggle('header-open');
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 720) {
    logo.innerText = '</>';
  } else {
    logo.innerText = '</> Fullstack Developer';
  }
});

header.querySelectorAll('nav').forEach((nav, index) => {
  nav.addEventListener('click', () => {
    if (sections[index]) {
      const offset = 50;
      const sectionPosition = sections[index].offsetTop;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth'
      });
    }
  });
});

let index = 0;

function logoMoviment(logo) {
  index < logos.children.length - 1 ? index ++ : index = 0;

  setTimeout(() => {
    logo.classList.contains('up') ? logo.classList.remove('up') : logo.classList.add('up');
    logoMoviment(logos.children[index]);
  }, 400);
}

logoMoviment(logos.children[index]);


