import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMuestraQuizPage } from './modal-muestra-quiz.page';

describe('ModalMuestraQuizPage', () => {
  let component: ModalMuestraQuizPage;
  let fixture: ComponentFixture<ModalMuestraQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMuestraQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMuestraQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
