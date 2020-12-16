import { renderComponent } from '@glimmer/core';
import App from './App.js';
import LocaleService from './services/LocaleService.js';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.body;
    renderComponent(App, {
      element: element,
      owner: {
        services: {
          locale: new LocaleService('en_US'),
        },
      },
    });
  },
  { once: true }
);


