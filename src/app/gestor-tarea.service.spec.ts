/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GestorTareaService } from './gestor-tarea.service';

describe('Service: GestorTarea', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestorTareaService]
    });
  });

  it('should ...', inject([GestorTareaService], (service: GestorTareaService) => {
    expect(service).toBeTruthy();
  }));
});
