import menuItems from './templates/menu-item.hbs';
import menu from './menu.json';
import './styles.css';

const gallery = document.querySelector('ul.js-menu');
const markup = menuItems(menu);
gallery.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');
const themeRefs = document.querySelector('.theme-switch__toggle');

firstColor();
function firstColor() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    themeRefs.checked = true;
    bodyRef.classList.add((localStorage.theme = Theme.DARK));
  } else {
    themeRefs.checked = false;
  }
}

themeRefs.addEventListener('change', changeTheme);
function changeTheme(event) {
  if (event.currentTarget.checked) {
    bodyRef.classList.remove((localStorage.theme = Theme.LIGHT));
    bodyRef.classList.add((localStorage.theme = Theme.DARK));
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark-theme');
    return;
  }
  bodyRef.classList.add((localStorage.theme = Theme.LIGHT));
  bodyRef.classList.remove((localStorage.theme = Theme.DARK));
  localStorage.removeItem('theme');
  localStorage.setItem('theme', 'light-theme');
  return;
}
