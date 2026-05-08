import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestorTareaService } from '../gestor-tarea.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gestor-tareas',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  templateUrl: './gestor-tareas.component.html',
  styleUrls: ['./gestor-tareas.component.css'],
})


export class GestorTareasComponent {
  protected nuevaTarea = '';
  // Inyectamos el servicio para gestionar las tareas
  private gestionTareaService = inject(GestorTareaService);
  public tareas = this.gestionTareaService.tareas; // Accedemos a las tareas desde el servicio

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.gestionTareaService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = ''; // Limpiamos el input después de añadir la tarea
    }
  }

  eliminarTarea(index: number) {
    this.gestionTareaService.eliminarTarea(index);
  }
}
