console.log("usti");

// navbar after scroll
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-custom");
  if (window.scrollY > 500  ) {
    console.log("Gusti");
    navbar.classList.remove("navbar-default");
    navbar.classList.add("navbar-scrolled");
    
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.classList.add("navbar-default");
}});

// logo after scroll
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-img-custom");
  if (window.scrollY > 500  ) {
   
    navbar.classList.remove("img-nav-default");
    navbar.classList.add("img-nav-scrolled");
    
  } else {
    navbar.classList.remove("img-nav-scrolled");
    navbar.classList.add("img-nav-default");
}});

// hero animasi
document.addEventListener('DOMContentLoaded', function () {
    const heroText = document.querySelector('.hero-text');
    heroText.classList.add('animasi-hero');
});

// about animasi
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollPositionVh = scrollPosition / viewportHeight * 100; // Konversi ke satuan vh
    const animasiAbout = document.querySelector('.animasi-muncul-kiri');
    if (scrollPositionVh > 50 && scrollPositionVh <= 120) {
        animasiAbout.classList.remove('sebelum-kiri');
        animasiAbout.classList.add('sesudah-kiri');
        } else {
        animasiAbout.classList.remove('sesudah-kiri');
        animasiAbout.classList.add('sebelum-kiri');
        }
    });

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollPositionVh = scrollPosition / viewportHeight * 100; // Konversi ke satuan vh
    const animasiAbout = document.querySelector('.animasi-muncul-kanan');
    if (scrollPositionVh > 50 && scrollPositionVh <= 120) {
        animasiAbout.classList.remove('sebelum-kanan');
        animasiAbout.classList.add('sesudah-kanan');
        } else {
        animasiAbout.classList.remove('sesudah-kanan');
        animasiAbout.classList.add('sebelum-kanan');
        }
    });



