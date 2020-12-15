import Component from '@glimmer/component';
import {
  createTemplate,
  setComponentTemplate,
} from '@glimmer/core';


import './App.css';
import logo from './logo.svg';

import { Router, Link } from './GlimmerRouter.js';


class App extends Component {
  logo = logo;
}


setComponentTemplate(
  createTemplate(
    { Router, Link },
    `
      <img src={{this.logo}} width="128"/>
      <h1>Glimmer Routing demo</h1>
      <nav>
          <ul>
            <li><Link @to="/">Home</Link></li>
            <li><Link @to="about">About</Link></li>
            <li><Link @to="contact">Contact</Link></li>
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
