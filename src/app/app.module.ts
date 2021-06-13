import { AppConfig } from './config';
import { FormioAppConfig } from './../../projects/angular-formio/src/formio.config';
import { FormioModule } from './../../projects/angular-formio/src/formio.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormioModule } from '@formio/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrismService } from './PrismService';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

@NgModule({
  declarations: [AppComponent, MeuComponenteComponent],
  imports: [BrowserModule, AppRoutingModule, FormioModule],
  providers: [PrismService, { provide: FormioAppConfig, useValue: AppConfig }],
  bootstrap: [AppComponent],
  entryComponents: [MeuComponenteComponent],
})
export class AppModule {}
