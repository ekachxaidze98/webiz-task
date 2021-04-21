const serviceCards = document.querySelectorAll('.service__item');


function active(event) {
  serviceCards.forEach(item => item.classList.remove('service__item--active'))
  event.currentTarget.classList.add('service__item--active');
}

serviceCards.forEach(item => item.addEventListener('click', active))