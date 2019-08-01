import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiasComponent } from './economias.component';

describe('EconomiasComponent', () => {
  let component: EconomiasComponent;
  let fixture: ComponentFixture<EconomiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
