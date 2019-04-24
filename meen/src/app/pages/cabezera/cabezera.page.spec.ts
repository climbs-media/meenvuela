import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraPage } from './cabezera.page';

describe('CabezeraPage', () => {
  let component: CabezeraPage;
  let fixture: ComponentFixture<CabezeraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
