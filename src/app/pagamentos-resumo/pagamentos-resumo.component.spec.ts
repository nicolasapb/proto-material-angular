import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosResumoComponent } from './pagamentos-resumo.component';

describe('PagamentosResumoComponent', () => {
  let component: PagamentosResumoComponent;
  let fixture: ComponentFixture<PagamentosResumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentosResumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentosResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
