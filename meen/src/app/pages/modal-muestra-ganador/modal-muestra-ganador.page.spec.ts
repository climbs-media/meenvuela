import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMuestraGanadorPage } from './modal-muestra-ganador.page';

describe('ModalMuestraGanadorPage', () => {
  let component: ModalMuestraGanadorPage;
  let fixture: ComponentFixture<ModalMuestraGanadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMuestraGanadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMuestraGanadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
