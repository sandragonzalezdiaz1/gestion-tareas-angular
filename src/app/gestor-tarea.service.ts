import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestorTareaService {

constructor() { }

  private listadoTareas = signal<{texto: string, completada: boolean}[]>([]);
  public tareas = this.listadoTareas.asReadonly();


  public agregarTarea(tarea: string) {

    this.listadoTareas.update((tareasActuales) => [...tareasActuales, {texto: tarea, completada: false}]);
  }


  eliminarTarea(index: number) {
    // Eliminamos la tarea en la posición dada por el índice
    this.listadoTareas.update(tareasActuales => tareasActuales.filter((_, i) => i !== index));
  }




}
