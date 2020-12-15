import { renderComponent } from '@glimmer/core';
import App from './App.js';
import LocaleService from './services/LocaleService.js';
import RoutingService from './services/RoutingService.js';
import routes from './routes.js';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.getElementById('app');
    renderComponent(App, {
      element: element,
      owner: {
        services: {
          locale: new LocaleService('en_US'),
          routing: new RoutingService(routes, 'app'),
        },
      },
    });
  },
  { once: true }
);
