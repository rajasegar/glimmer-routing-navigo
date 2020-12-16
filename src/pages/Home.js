import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const Home = setComponentTemplate(createTemplate(`
<div class="pt-page pt-page-1">
  <h1>Home Page</h1>
  </div>
  `), templateOnlyComponent());

export default Home;

