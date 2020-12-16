import Component from "@glimmer/component";
import { renderComponent } from '@glimmer/core';
import Navigo from 'navigo';
import routes from './routes.js';

import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner
} from '@glimmer/core';

const LinkTo = setComponentTemplate(createTemplate(`
  <a href={{@route}} data-navigo>{{yield}}</a>
  `), templateOnlyComponent());

function startNavigo(element) {

  routes(element);
  
}

const Router = setComponentTemplate(createTemplate({ startNavigo },`
      <div id="glimmer-router-outlet" {{ startNavigo }}></div>
   `), templateOnlyComponent())

export { Router, LinkTo };
