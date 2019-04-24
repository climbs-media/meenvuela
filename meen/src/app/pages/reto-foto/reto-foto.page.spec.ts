import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoFotoPage } from './reto-foto.page';

describe('RetoFotoPage', () => {
  let component: RetoFotoPage;
  let fixture: ComponentFixture<RetoFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
