import { MeuComponenteComponent } from './meu-componente.component';
import { Injector, NgModule } from '@angular/core';
import { PrismService } from './../PrismService';
import { FormioModule } from './../../../projects/angular-formio/src/formio.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { registerEstadoCidadeComponent } from '../estado-cidade/estado-cidade.formio';
import { registerMeuComponente } from './meu-componente.formio';

@NgModule({
  declarations: [MeuComponenteComponent],
  imports: [BrowserModule, FormioModule, ReactiveFormsModule],
})
export class MeuComponenteModule {
  constructor(injector: Injector) {
    registerMeuComponente(injector);
  }
}
