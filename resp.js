const header = document.querySelector('header');
const headerManager = document.querySelector('.header-manager');
const sections = document.querySelectorAll('section');
const logos = document.querySelector('.logos');

headerManager.addEventListener('click', () => {
  header.classList.toggle('header-open');
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
      header.classList.toggle('header-open');
    }
  });
});

let index = 0;

function logoMoviment(logo) {
  index < logos.children.length - 1 ? index ++ : index = 0;
  logo.classList.contains('up') ? logo.classList.remove('up') : logo.classList.add('up');

  setTimeout(() => {
    logo.classList.contains('up') ? logo.classList.remove('up') : logo.classList.add('up');
    logoMoviment(logos.children[index]);
  }, 400);
}

logoMoviment(logos.children[index]);


