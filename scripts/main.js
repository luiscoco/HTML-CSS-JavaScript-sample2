// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('#myFirstButton');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

// Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slider-img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlides(n) {
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
  });
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].style.display = 'block';
}

next.onclick = () => showSlides(slideIndex + 1);
prev.onclick = () => showSlides(slideIndex - 1);
showSlides(slideIndex);  // Initially show the first image

// Fetch data with AJAX
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      document.getElementById('data-container').innerHTML = `Task: ${json.title}`;
    })
    .catch(error => console.error('Error:', error));
}

fetchData();  // Load data on page load

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
