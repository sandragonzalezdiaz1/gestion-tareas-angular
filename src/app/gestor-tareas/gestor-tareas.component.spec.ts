/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { GestorTareasComponent } from './gestor-tareas.component';

describe('GestorTareasComponent', () => {
  let component: GestorTareasComponent;
  let fixture: ComponentFixture<GestorTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestorTareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestorTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
