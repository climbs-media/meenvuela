import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotaFotoPage } from './vota-foto.page';

describe('VotaFotoPage', () => {
  let component: VotaFotoPage;
  let fixture: ComponentFixture<VotaFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotaFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotaFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
