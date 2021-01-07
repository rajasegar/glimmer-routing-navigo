import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const Home = setComponentTemplate(createTemplate(`
  <h1>Home Page</h1>
  `), templateOnlyComponent());

export default Home;

