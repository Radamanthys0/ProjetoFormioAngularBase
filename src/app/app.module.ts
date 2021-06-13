import { AppConfig } from './config';
import { FormioAppConfig } from './../../projects/angular-formio/src/formio.config';
import { FormioModule } from './../../projects/angular-formio/src/formio.module';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormioModule } from '@formio/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrismService } from './PrismService';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { registerMeuComponente } from './meu-componente/meu-componente.formio';
import { EstadoCidadeComponent } from './estado-cidade/estado-cidade.component';
import { registerEstadoCidadeComponent } from './estado-cidade/estado-cidade.formio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MeuComponenteComponent, EstadoCidadeComponent],
  imports: [BrowserModule, AppRoutingModule, FormioModule, ReactiveFormsModule],
  providers: [PrismService, { provide: FormioAppConfig, useValue: AppConfig }],
  bootstrap: [AppComponent],
  entryComponents: [MeuComponenteComponent], // talvez não seja necessário por conta do Ivy
})
export class AppModule {
  constructor(injector: Injector) {
    registerMeuComponente(injector);
    registerEstadoCidadeComponent(injector);
  }
}
