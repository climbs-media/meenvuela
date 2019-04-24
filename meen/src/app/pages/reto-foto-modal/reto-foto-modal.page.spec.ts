import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoFotoModalPage } from './reto-foto-modal.page';

describe('RetoFotoModalPage', () => {
  let component: RetoFotoModalPage;
  let fixture: ComponentFixture<RetoFotoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoFotoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoFotoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
