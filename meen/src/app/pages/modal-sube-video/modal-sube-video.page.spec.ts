import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubeVideoPage } from './modal-sube-video.page';

describe('ModalSubeVideoPage', () => {
  let component: ModalSubeVideoPage;
  let fixture: ComponentFixture<ModalSubeVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSubeVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubeVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
