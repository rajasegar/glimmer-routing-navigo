import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';
import Navigo from 'navigo';
import routes from './routes.js';

import { renderComponent } from "@glimmer/core";

import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner
} from '@glimmer/core';

import About from './pages/About.js';
import Contact from './pages/Contact.js';

const Link = setComponentTemplate(createTemplate(`
  <a href={{@to}} class="glimmer-link" data-navigo>{{yield}}</a>
  `), templateOnlyComponent());

function startNavigo(element) {

  const router = new Navigo("/");
  const navigoRoutes = {};

  routes.forEach(r => {
    navigoRoutes[r.path] = () => {
      element.innerHTML = '';
      renderComponent(r.component, element);
    }
  });

  router.on(navigoRoutes).resolve();
  /*
  router.on({
    'about': () => {
      element.innerHTML = '';
      renderComponent(About, element);
    },
    'contact': () => {
      element.innerHTML = '';
      renderComponent(Contact, element);
    }
  }).resolve();
  */

}

const Router = setComponentTemplate(createTemplate({ startNavigo },`
      <div id="glimmer-router-outlet" {{ startNavigo }}></div>
   `), templateOnlyComponent())

export { Router, Link };
