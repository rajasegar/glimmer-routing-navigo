import { renderComponent } from '@glimmer/core';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

export default function(element) {
  return {
    'about': () => {
      element.innerHTML = '';
      renderComponent(About, element);
    }  ,
    'contact': () => {
      element.innerHTML = '';
      renderComponent(Contact, element);
    },
    '*': () => {
      element.innerHTML = '';
      renderComponent(Home, element);
    }
  };
}
