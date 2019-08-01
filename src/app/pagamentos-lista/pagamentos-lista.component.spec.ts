import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosListaComponent } from './pagamentos-lista.component';

describe('PagamentosListaComponent', () => {
  let component: PagamentosListaComponent;
  let fixture: ComponentFixture<PagamentosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
