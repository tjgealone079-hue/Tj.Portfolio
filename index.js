const navbar = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section, .home, .projects, .technologies, .experience, .about, .getInTouch'); 

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }


  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; 
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === '#' + currentSection) {
      item.classList.add('active');
    }
  });
});


