import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCidadeComponent } from './estado-cidade.component';

describe('EstadoCidadeComponent', () => {
  let component: EstadoCidadeComponent;
  let fixture: ComponentFixture<EstadoCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
