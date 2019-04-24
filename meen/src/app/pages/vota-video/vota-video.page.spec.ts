import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotaVideoPage } from './vota-video.page';

describe('VotaVideoPage', () => {
  let component: VotaVideoPage;
  let fixture: ComponentFixture<VotaVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotaVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotaVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
