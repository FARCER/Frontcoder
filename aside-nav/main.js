const toggle = document.querySelector('.nav-action');

toggle.addEventListener('click', function () {
  const mainContent = document.querySelector('main');
  const nav = document.querySelector('nav');

  this.classList.toggle('is-active');
  mainContent.classList.toggle('is-active');
  nav.classList.toggle('is-active');
  document.body.classList.toggle('is-active');


});
