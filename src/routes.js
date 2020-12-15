import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
export default [
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '*',
    component: Home
  },
];
