import { FormBuilder } from 'formiojs';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormioCustomComponent } from 'projects/angular-formio/src';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './estado-cidade.component.html',
  styleUrls: ['./estado-cidade.component.scss'],
})
export class EstadoCidadeComponent
  implements FormioCustomComponent<Array<any>>, OnInit
{
  @Input()
  value: Array<any>;

  @Output()
  valueChange = new EventEmitter<Array<any>>();

  @Input()
  disabled: boolean;

  @Input()
  values: any;

  @Input()
  array1: any;
  @Input()
  array2: any;

  segundoArrayDependente = [];

  formulario = new FormGroup({
    array1: new FormControl(''),
    array2: new FormControl(''),
  });

  ngOnInit() {
    // this.formulario.valueChanges.subscribe((valueForm) => console.log(valueForm));

    this.formulario.controls.array1.valueChanges.subscribe((valueArr1) => {
      console.log(valueArr1);
      this.segundoArrayDependente = this.array2.filter((item) => {
        const valor = JSON.parse(item.value);
        return valor.estado === valueArr1;
      });
    });
  }

  usuarioSelecionou1Array(e) {
    console.log(e);
  }

  ver() {
    console.table(this.array1);
    console.table(this.array2);
  }
}
