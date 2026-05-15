import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestorTareaService } from '../gestor-tarea.service';
import { MatCardModule } from '@angular/material/card';
import { ItemTareaComponent } from '../item-tarea/item-tarea.component';
import { FormTareaComponent } from "../form-tarea/form-tarea.component";
import { OrdenacionPrioridadPipe } from '../ordenacion-prioridad.pipe';


@Component({
  selector: 'app-gestor-tareas',
  imports: [
    FormsModule,
    MatCardModule,
    ItemTareaComponent,
    FormTareaComponent,
    OrdenacionPrioridadPipe
  ],
  templateUrl: './gestor-tareas.component.html',
  styleUrls: ['./gestor-tareas.component.css'],
})


export class GestorTareasComponent {
  // Inyectamos el servicio para gestionar las tareas
  private gestionTareaService = inject(GestorTareaService);
  public tareas = this.gestionTareaService.tareas; // Accedemos a las tareas desde el servicio

  agregarTarea(tarea: { texto: string; prioridad: string; fechaVencimiento: Date; }) {
    this.gestionTareaService.agregarTarea(tarea);
  }

  eliminarTarea(id: number) {
    this.gestionTareaService.eliminarTarea(id);
  }
}
