import routes from './routes.js';

import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const Router = setComponentTemplate(createTemplate({ routes },`
      <div id="glimmer-router-outlet" {{ routes }}></div>
   `), templateOnlyComponent())

export { Router };
