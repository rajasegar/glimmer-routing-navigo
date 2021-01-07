import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const About = setComponentTemplate(createTemplate(`
  <h1>About Page</h1>
  `), templateOnlyComponent());

export default About;

