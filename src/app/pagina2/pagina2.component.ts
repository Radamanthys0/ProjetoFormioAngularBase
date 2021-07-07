import { PrismService } from './../PrismService';
import { FormioRefreshValue } from './../../../projects/angular-formio/src/formio.common';
import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss'],
})
export class Pagina2Component implements OnInit {
  @ViewChild('json', { static: true }) jsonElement?: ElementRef;
  @ViewChild('code', { static: true }) codeElement?: ElementRef;
  public form: Object;
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(public prism: PrismService) {
    this.form = {
      components: [
        {
          components: [
            {
              type: 'estadoCidade',
              label: '',
              key: 'estadoCidade1',
              customOptions: {
                array1: [
                  {
                    label: 'Minas',
                    value: 'minas',
                  },
                  {
                    label: 'Rio de Janeiro',
                    value: 'rioDeJaneiro',
                  },
                ],
                array2: [
                  {
                    label: 'Belo Horizonte',
                    value: '{"cidade":"beloHorizonte", "estado":"minas"}',
                  },
                  {
                    label: 'Rio Acima',
                    value: '{ "cidade":"rioAcima", "estado":"minas"}',
                  },
                  {
                    label: 'Rio de Janeiro',
                    value: '{ "cidade":"rio", "estado":"rioDeJaneiro"}',
                  },
                ],
              },
              input: true,
              tableView: false,
            },
            {
              label: 'Text Fielddasdasd',
              tableView: true,
              key: 'textFielddasdasd',
              type: 'textfield',
              input: true,
            },
            {
              type: 'meuComponente',
              label: 'hjgjg',
              key: 'meuComponente',
              customOptions: {
                myOption: 'adasd',
              },
              input: true,
              tableView: false,
            },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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

  customEvent(event) {
    console.log(event);
  }
}
