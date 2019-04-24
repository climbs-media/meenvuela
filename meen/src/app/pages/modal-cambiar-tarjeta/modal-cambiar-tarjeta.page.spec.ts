import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCambiarTarjetaPage } from './modal-cambiar-tarjeta.page';

describe('ModalCambiarTarjetaPage', () => {
  let component: ModalCambiarTarjetaPage;
  let fixture: ComponentFixture<ModalCambiarTarjetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCambiarTarjetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCambiarTarjetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
