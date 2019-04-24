import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubeFotoPage } from './modal-sube-foto.page';

describe('ModalSubeFotoPage', () => {
  let component: ModalSubeFotoPage;
  let fixture: ComponentFixture<ModalSubeFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSubeFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubeFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
