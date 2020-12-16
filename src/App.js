import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


import './App.css';

import { Router } from './GlimmerRouter.js';


class App extends Component {
  transitions = [
    'pt-page-moveToLeft',
    'pt-page-moveToRight',
    'pt-page-moveToTop',
    'pt-page-moveToBottom',
    'pt-page-moveFromLeft',
    'pt-page-moveFromRight',
    'pt-page-moveFromTop',
    'pt-page-moveFromBottom',
  ];
}


setComponentTemplate(
  createTemplate(
    { Router },
    `
    <header>
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>

        <select id="lstTransitions">
        {{#each this.transitions as |t|}}
        <option value={{t}}>{{t}}</option>
        {{/each}}
        </select>
            </li>
          </ul>
        </nav>
        </header>
   <div id="pt-main" class="pt-perspective">
   <Router/>
   </div>
    `
  ),
  App
);

export default App;
