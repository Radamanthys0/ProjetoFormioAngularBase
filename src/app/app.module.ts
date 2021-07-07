import { MeuComponenteModule } from './meu-componente/meu-componente.module';
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
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';

@NgModule({
  declarations: [AppComponent, EstadoCidadeComponent, Pagina2Component, Pagina1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    ReactiveFormsModule,
    // MeuComponenteModule,
  ],
  providers: [PrismService, { provide: FormioAppConfig, useValue: AppConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(injector: Injector) {
  //   // registerMeuComponente(injector);
  //   registerEstadoCidadeComponent(injector);
  // }
}
