import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDescriEscaparatePage } from './popover-descri-escaparate.page';

describe('PopoverDescriEscaparatePage', () => {
  let component: PopoverDescriEscaparatePage;
  let fixture: ComponentFixture<PopoverDescriEscaparatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDescriEscaparatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDescriEscaparatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
