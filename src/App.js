import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


import './App.css';
import logo from './logo.svg';

import { Router, LinkTo } from './GlimmerRouter.js';


class App extends Component {
  logo = logo;
}


setComponentTemplate(
  createTemplate(
    { Router, LinkTo },
    `
      <img src={{this.logo}} width="128"/>
      <h1>Glimmer Routing demo</h1>
      <nav>
          <ul>
            <li><LinkTo @route="/">Home</LinkTo></li>
            <li><LinkTo @route="about">About</LinkTo></li>
            <li><LinkTo @route="contact">Contact</LinkTo></li>
          </ul>
        </nav>
   <main>
   <Router/>
   </main>
    `
  ),
  App
);

export default App;
