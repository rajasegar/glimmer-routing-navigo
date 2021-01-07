import routes from './routes.js';
import Navigo from 'navigo';

import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const LinkTo = setComponentTemplate(createTemplate(`
  <a href={{@route}} data-navigo>{{yield}}</a>
  `), templateOnlyComponent());

function startNavigo(element) {

  const router = new Navigo("/");
  const navigoRoutes = routes(element);

  router.on(navigoRoutes).resolve();

  return () => {
    router.destroy();
  }

}

const Router = setComponentTemplate(createTemplate({ startNavigo },`
      <div id="glimmer-router-outlet" {{ startNavigo }}></div>
   `), templateOnlyComponent())

export { Router, LinkTo };

