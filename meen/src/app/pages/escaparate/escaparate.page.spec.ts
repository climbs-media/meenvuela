import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaparatePage } from './escaparate.page';

describe('EscaparatePage', () => {
  let component: EscaparatePage;
  let fixture: ComponentFixture<EscaparatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscaparatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaparatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
