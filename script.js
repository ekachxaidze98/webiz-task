// service checkmarks
const checkbox = document.querySelectorAll('input[type=checkbox]');

function active(event) {
    const currentElement = event.target.parentElement.parentElement.parentElement.parentElement;
    if (currentElement.classList.contains('service__item--active')) {
        currentElement.classList.remove('service__item--active');
    } else {
        currentElement.classList.add('service__item--active');
    }
}

checkbox.forEach(item => item.addEventListener('click', active));

// textarea dissabled button

const textInput = document.getElementById("reviewTextarea");
const button = document.getElementById("reviewButton");

function valid() {
    if (textInput.value === "") {
        button.disabled = true
        button.classList.remove("active")
    } else {
        button.disabled = false
        button.classList.add("active")
    }

}

textInput.addEventListener('input', valid);