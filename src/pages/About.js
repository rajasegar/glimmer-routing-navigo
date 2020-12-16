import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const About = setComponentTemplate(createTemplate(`
<div class="pt-page pt-page-2">
  <h1>About Page</h1>
  </div>
  `), templateOnlyComponent());

export default About;

