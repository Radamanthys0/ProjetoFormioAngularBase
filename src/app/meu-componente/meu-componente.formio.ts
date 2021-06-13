import { MeuComponenteComponent } from './meu-componente.component';
import { Injector } from '@angular/core';
import {
  Components,
  registerCustomFormioComponent,
} from 'projects/angular-formio/src';
import { FormioCustomComponentInfo } from './../../../projects/angular-formio/src/elements.common';
const COMPONENT_OPTIONS: FormioCustomComponentInfo = {
  type: 'meuComponente', // custom type. Formio will identify the field with this type.
  selector: 'meu-componente', // custom selector. Angular Elements will create a custom html tag with this selector
  title: 'Meu Componente', // Title of the component
  group: 'basic', // Build Group
  icon: 'fa fa-star', // Icon
  //  template: 'input', // Optional: define a template for the element. Default: input
  //  changeEvent: 'valueChange', // Optional: define the changeEvent when the formio updates the value in the state. Default: 'valueChange',
  //  editForm: Components.components.textfield.editForm, // Optional: define the editForm of the field. Default: the editForm of a textfield
  // editForm: Components.components.file.editForm, // Optional: define the editForm of the field. Default: the editForm of a textfield
  editForm: minimalEditForm, // Optional: define the editForm of the field. Default: the editForm of a textfield
  //  documentation: '', // Optional: define the documentation of the field
  //  weight: 0, // Optional: define the weight in the builder group
  //  schema: {}, // Optional: define extra default schema for the field
  //  extraValidators: [], // Optional: define extra validators  for the field
  //  emptyValue: null, // Optional: the emptyValue of the field
  // fieldOptions: ['values', 'Label'], // Optional: explicit field options to get as `Input` from the schema (may edited by the editForm)
};

export function registerMeuComponente(injector: Injector) {
  registerCustomFormioComponent(
    COMPONENT_OPTIONS,
    MeuComponenteComponent,
    injector
  );
}

export function minimalEditForm() {
  return {
    components: [
      { key: 'type', type: 'hidden' },
      {
        weight: 0,
        type: 'textfield',
        input: true,
        key: 'label',
        label: 'Nome do componente',
        placeholder: 'Label',
        validate: {
          required: false,
        },
      },
      {
        weight: 10,
        type: 'textfield',
        input: true,
        key: 'key',
        label: 'Field Code',
        placeholder: 'Field Code',
        tooltip: 'The code/key/ID/name of the field.',
        validate: {
          required: true,
          maxLength: 128,
          pattern: '[A-Za-z]\\w*',
          patternMessage:
            'The property name must only contain alphanumeric characters, underscores and should only be started by any letter character.',
        },
      },
      {
        weight: 20,
        type: 'textfield',
        input: true,
        key: 'customOptions.myOption',
        label: 'My Custom Option',
        placeholder: 'My Custom Option',
        validate: {
          required: true,
        },
      },
    ],
  };
}
