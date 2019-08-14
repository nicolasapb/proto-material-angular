import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaSimulacaoComponent } from './caixa-simulacao.component';

describe('CaixaSimulacaoComponent', () => {
  let component: CaixaSimulacaoComponent;
  let fixture: ComponentFixture<CaixaSimulacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaSimulacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaSimulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
