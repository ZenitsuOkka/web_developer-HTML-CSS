const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});


