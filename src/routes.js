import { renderComponent } from '@glimmer/core';
import page from 'page';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

export default function(element) {

  page('/', () => {
    element.innerHTML = '';
    renderComponent(Home, element);
  });
  page('/about', () => {
    element.innerHTML = '';
    renderComponent(About, element);
  });
  page('/contact', () => {
    element.innerHTML = '';
    renderComponent(Contact, element);
  });

  page();
  
}
