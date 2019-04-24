import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanadoresPage } from './ganadores.page';

describe('GanadoresPage', () => {
  let component: GanadoresPage;
  let fixture: ComponentFixture<GanadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanadoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
