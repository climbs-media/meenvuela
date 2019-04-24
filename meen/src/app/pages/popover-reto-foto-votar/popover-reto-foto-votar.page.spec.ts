import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverRetoFotoVotarPage } from './popover-reto-foto-votar.page';

describe('PopoverRetoFotoVotarPage', () => {
  let component: PopoverRetoFotoVotarPage;
  let fixture: ComponentFixture<PopoverRetoFotoVotarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverRetoFotoVotarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverRetoFotoVotarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
