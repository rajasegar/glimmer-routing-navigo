import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


import './App.css';

import { Router, LinkTo } from './GlimmerRouter.js';


class App extends Component {
  
}


setComponentTemplate(
  createTemplate(
    { Router, LinkTo },
    `
    <header>
      <nav>
          <ul>
            <li><LinkTo @route="/">Home</LinkTo></li>
            <li><LinkTo @route="about">About</LinkTo></li>
            <li><LinkTo @route="contact">Contact</LinkTo></li>
          </ul>
        </nav>
        </header>
        <main>
   <Router/>
   </main>
    `
  ),
  App
);

export default App;
