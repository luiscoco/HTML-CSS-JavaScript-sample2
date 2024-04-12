# Introduction to HTML, CSS and JavaScript

Let's enhance your webpage with some more advanced features that could help you learn new skills in web developmen

Here are a few ideas to implement:

**1. Interactive Slider for Image Gallery**: Instead of just switching between two images on click, we can create an interactive slider for multiple images.

**2. Fetching Data with AJAX**: We can add a feature to fetch data from an external API and display it on the page without refreshing.

**3. Dark Mode Toggle**: Implement a button to switch between light and dark themes for your website.

Let's start by implementing each of these ideas, beginning with the Interactive Slider for Image Gallery.

## 1. Interactive Slider for Image Gallery

First, let's modify the HTML to accommodate a slider with multiple images. We'll add a container for the slider and navigation arrows:

```html
<div class="slider">
  <img src="images/firefox-icon.png" alt="The Firefox logo: a flaming fox surrounding the Earth." class="slider-img">
  <img src="images/firefox2.png" alt="Alternative Firefox logo." class="slider-img" style="display: none;">
  <img src="images/firefox3.png" alt="Another Firefox logo." class="slider-img" style="display: none;">
  <button class="prev">❮</button>
  <button class="next">❯</button>
</div>
```

Now, update your JavaScript to handle the slider functionality:

```javascript
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
```

## 2. Fetching Data with AJAX

Add a section to your HTML where AJAX-loaded data will be displayed:

```html
<div id="data-container">Loading data...</div>
```

Add this JavaScript code to fetch data from a public API (for example, JSONPlaceholder):

```javascript
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      document.getElementById('data-container').innerHTML = `Task: ${json.title}`;
    })
    .catch(error => console.error('Error:', error));
}

fetchData();  // Load data on page load
```

## 3. Dark Mode Toggle

Add a button to toggle dark mode:

```html
<button id="dark-mode-toggle">Toggle Dark Mode</button>
```
And JavaScript to handle the toggle:

```javascript
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});
```

**CSS for Dark Mode**

```css
// CSS for dark mode
.dark-mode {
  background-color: #333;
  color: #fff;
}
```

This setup gives you a starting point for each feature. You can expand and customize them further based on your learning goals and preferences.

