import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMuestraVideoPage } from './modal-muestra-video.page';

describe('ModalMuestraVideoPage', () => {
  let component: ModalMuestraVideoPage;
  let fixture: ComponentFixture<ModalMuestraVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMuestraVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMuestraVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
