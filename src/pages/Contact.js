import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const Contact = setComponentTemplate(createTemplate(`<h1>Contact Page</h1>`), templateOnlyComponent());

export default Contact;

