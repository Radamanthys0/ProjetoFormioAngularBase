import { MeuComponenteComponent } from './meu-componente.component';
import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { registerMeuComponente } from './meu-componente.formio';

@NgModule({
  declarations: [MeuComponenteComponent],
  imports: [ReactiveFormsModule],
})
export class MeuComponenteModule {
  constructor(injector: Injector) {
    registerMeuComponente(injector);
  }
}
