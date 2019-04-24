import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoVideoPage } from './reto-video.page';

describe('RetoVideoPage', () => {
  let component: RetoVideoPage;
  let fixture: ComponentFixture<RetoVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetoVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetoVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
