import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasProgressoComponent } from './barras-progresso.component';

describe('BarrasProgressoComponent', () => {
  let component: BarrasProgressoComponent;
  let fixture: ComponentFixture<BarrasProgressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrasProgressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasProgressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
