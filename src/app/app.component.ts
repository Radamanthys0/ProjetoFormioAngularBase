import { FormioRefreshValue } from './../../projects/angular-formio/src/formio.common';
import { Component, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { PrismService } from './PrismService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('json', { static: true }) jsonElement?: ElementRef;
  @ViewChild('code', { static: true }) codeElement?: ElementRef;
  public form: Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService) {
    this.form = { components: [] };
  }

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    console.log(event.form);
    this.jsonElement.nativeElement.appendChild(
      document.createTextNode(JSON.stringify(event.form, null, 4))
    );
    this.refreshForm.emit({
      property: 'form',
      value: event.form,
    });
  }

  ngAfterViewInit() {
    this.prism.init();
  }
}
