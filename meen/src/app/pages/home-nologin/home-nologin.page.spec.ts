import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNologinPage } from './home-nologin.page';

describe('HomeNologinPage', () => {
  let component: HomeNologinPage;
  let fixture: ComponentFixture<HomeNologinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNologinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNologinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
