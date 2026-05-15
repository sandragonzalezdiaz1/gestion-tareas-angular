import { Component, EventEmitter, Input, OnDestroy, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FechaVencimientoPipe } from '../fecha-vencimiento.pipe';


@Component({
  selector: 'app-item-tarea',
  imports: [ 
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    FechaVencimientoPipe ],
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})

export class ItemTareaComponent implements OnDestroy{

  // Recibe la tarea desde el componente padre mediante @Input()
  // Usamos ! porque Angular inicializa el valor después de crear el componente y TypeScript lanza un error
  @Input() tarea!: { id: number; texto: string; completada: boolean ; prioridad: string; fechaVencimiento: Date}; 

  // Evento que enviará al componente padre el ID de la tarea a eliminar
  @Output() tareaAEliminar = new EventEmitter<number>();

  // Signal que almacena la fecha y hora actual
  // Se utilizará para actualizar automáticamente la pipe de vencimiento
  readonly ahora = signal(new Date());

  // Actualiza la signal cada minuto para recalcular el tiempo restante de la tarea
  private intervalo = setInterval(() => this.ahora.set(new Date()), 60000); 

  eliminarTarea(){
    this.tareaAEliminar.emit(this.tarea.id);
  }
  
  ngOnDestroy(): void {
    // Evita memory leaks al eliminar la tarea
    clearInterval(this.intervalo);
  }
}
