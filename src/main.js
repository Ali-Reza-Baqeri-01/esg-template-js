// import './style.css'
// import javascriptLogo from './assets/javascript.svg'
// import { setupCounter } from './counter.js'

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
});
