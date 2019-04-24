import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverRetoVideoVotarPage } from './popover-reto-video-votar.page';

describe('PopoverRetoVideoVotarPage', () => {
  let component: PopoverRetoVideoVotarPage;
  let fixture: ComponentFixture<PopoverRetoVideoVotarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverRetoVideoVotarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverRetoVideoVotarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
