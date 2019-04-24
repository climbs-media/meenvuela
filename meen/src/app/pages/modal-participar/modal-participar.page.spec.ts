import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParticiparPage } from './modal-participar.page';

describe('ModalParticiparPage', () => {
  let component: ModalParticiparPage;
  let fixture: ComponentFixture<ModalParticiparPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalParticiparPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalParticiparPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
