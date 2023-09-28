const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const deroulant = document.querySelector('.deroulant');
const classet = document.querySelector('.classet');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');



});



deroulant.addEventListener('click', function() {
classet.classList.toggle('active');



});
