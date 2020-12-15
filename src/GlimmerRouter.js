import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';

import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
  getOwner
} from '@glimmer/core';

const Link = setComponentTemplate(createTemplate(`
  <a href={{@to}} class="glimmer-link">{{yield}}</a>
  `), templateOnlyComponent());

const Router = setComponentTemplate(createTemplate(`
      <div id="glimmer-router-outlet"></div>
   `), templateOnlyComponent())

export { Router, Link };
