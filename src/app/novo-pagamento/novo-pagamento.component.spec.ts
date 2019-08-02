import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPagamentoComponent } from './novo-pagamento.component';

describe('NovoPagamentoComponent', () => {
  let component: NovoPagamentoComponent;
  let fixture: ComponentFixture<NovoPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
