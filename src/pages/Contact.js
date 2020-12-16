import {
  createTemplate,
  setComponentTemplate,
  templateOnlyComponent,
} from '@glimmer/core';

const Contact = setComponentTemplate(createTemplate(`

<div class="pt-page pt-page-3">
  <h1>Contact Page</h1>
  </div>

  `), templateOnlyComponent());

export default Contact;

