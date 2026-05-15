import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GestorTareaService {

  private listadoTareas = signal<{ id: number, texto: string, completada: boolean, prioridad: string, fechaVencimiento: Date }[]>([]);
  public tareas = this.listadoTareas.asReadonly();

  // Contador para generar IDs únicos
  private siguienteId = 0;

  public agregarTarea(tarea: { texto: string; prioridad: string; fechaVencimiento: Date; }) {

    this.listadoTareas.update((tareasActuales) =>
      [...tareasActuales, { id: this.siguienteId++, texto: tarea.texto, completada: false, prioridad: tarea.prioridad, fechaVencimiento: tarea.fechaVencimiento }]);

  }

  // Elimina una tarea según su ID
  eliminarTarea(id: number) {
  
    this.listadoTareas.update(tareasActuales => tareasActuales.filter(tarea => tarea.id !== id));
  }



}
