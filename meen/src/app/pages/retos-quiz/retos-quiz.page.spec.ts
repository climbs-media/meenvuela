import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosQuizPage } from './retos-quiz.page';

describe('RetosQuizPage', () => {
  let component: RetosQuizPage;
  let fixture: ComponentFixture<RetosQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosQuizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
