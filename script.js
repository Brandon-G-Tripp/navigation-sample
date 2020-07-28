const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2) {
   navItems.forEach((nav, idx) => {
      nav.classList.replace(`slide-${direction1}-${idx + 1}`, `slide-${direction2}-${idx + 1}`)
   });
}

function toggleNav() {
   menuBars.classList.toggle('change');
   overlay.classList.toggle('overlay-active');
   if(overlay.classList.contains('overlay-active')) {
      overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
      // nav item animation
      navAnimation('out', 'in');
   } else {
      overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
      // nav item animation
      navAnimation('in', 'out');
   }
}

// event listeners

menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);