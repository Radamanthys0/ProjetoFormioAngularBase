import { AppConfig } from './config';
import { FormioAppConfig } from './../../projects/angular-formio/src/formio.config';
import { FormioModule } from './../../projects/angular-formio/src/formio.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormioModule } from '@formio/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrismService } from './PrismService';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormioModule],
  providers: [PrismService, { provide: FormioAppConfig, useValue: AppConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
