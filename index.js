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


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// Check saved preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkmode') === 'true';
  const toggle = document.querySelector('.toggle-circle');

  if (isDarkMode) {
    document.body.classList.add('darkmode');
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // moon for dark
  } else {
    document.body.classList.remove('darkmode');
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // sun for light
  }
});

function darkmode_toggle() {
  const toggle = document.querySelector('.toggle-circle');

  // If currently dark (moon icon), switch to light
  if (toggle.innerHTML.trim() === '<i class="fa-solid fa-moon"></i>') {
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // sun on left
    document.body.classList.remove('darkmode'); // light mode
    localStorage.setItem('darkmode', 'false'); // save preference
  } 
  // If currently light (sun icon), switch to dark
  else {
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // moon on right
    document.body.classList.add('darkmode'); // dark mode
    localStorage.setItem('darkmode', 'true'); // save preference
  }
}






// MOUSE WHEEL SMOOTH SCROLL
let currentScroll = 0;
let targetScroll = 0;
const ease = 0.05;

window.addEventListener("wheel", e => {
  e.preventDefault();
  targetScroll += e.deltaY * 1;
  targetScroll = Math.max(0, Math.min(targetScroll, document.body.scrollHeight - window.innerHeight));
}, { passive: false });

function smoothScroll() {
  currentScroll += (targetScroll - currentScroll) * ease;
  window.scrollTo(0, currentScroll);
  requestAnimationFrame(smoothScroll);
}
smoothScroll();


