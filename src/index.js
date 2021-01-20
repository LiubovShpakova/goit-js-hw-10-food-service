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
