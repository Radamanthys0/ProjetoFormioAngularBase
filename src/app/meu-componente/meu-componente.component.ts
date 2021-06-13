import {
  FormioCustomComponent,
  FormioEvent,
} from './../../../projects/angular-formio/src/elements.common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.scss'],
})
export class MeuComponenteComponent implements FormioCustomComponent<number> {
  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  disabled: boolean;

  @Input() placeholder: string;
  @Input() myOption: string;

  @Output()
  formioEvent = new EventEmitter<FormioEvent>();
  // https://github.com/formio/angular/pull/443
  emitirEvento() {
    this.formioEvent.emit({
      eventName: 'customEvent',
      data: { teste: 'teste' },
    });
  }
}
