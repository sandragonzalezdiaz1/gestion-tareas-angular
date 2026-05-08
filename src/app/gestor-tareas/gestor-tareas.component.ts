import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestor-tareas',
  imports: [FormsModule],
  templateUrl: './gestor-tareas.component.html',
  styleUrls: ['./gestor-tareas.component.css']
})
export class GestorTareasComponent  {

  protected tareas = signal<{texto: string, completada: boolean}[]>([]);
  protected nuevaTarea = '';

  agregarTarea() {
    // Si el input no está vacío, añadimos la nueva tarea a la lista
    if (this.nuevaTarea.trim() !== '') {

      this.tareas.update(tareasActuales => [...tareasActuales, {texto: this.nuevaTarea, completada: false}]);
      this.nuevaTarea = ''; // Limpiamos el input después de añadir la tarea
    }
  }


  eliminarTarea(index: number) {
    // Eliminamos la tarea en la posición dada por el índice
    this.tareas.update(tareasActuales => tareasActuales.filter((_, i) => i !== index));
  }

}
