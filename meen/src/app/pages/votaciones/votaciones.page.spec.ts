import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotacionesPage } from './votaciones.page';

describe('VotacionesPage', () => {
  let component: VotacionesPage;
  let fixture: ComponentFixture<VotacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
