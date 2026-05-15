import { Component, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'


@Component({
  selector: 'app-form-tarea',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule],
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css']

})


export class FormTareaComponent {

  nuevaTarea: string = '';
  prioridad: string = 'media'; // Valor por defecto del select
  fechaVencimiento = '';
  fechaInvalida: boolean = false

  // Fecha mínima permitida en el input datetime-local
  // Se calcula al crear el componente
  fechaMinima: string = this.obtenerFechaMinima();
  
  fechaMaxima: string = this.obtenerFechaMaxima();

  // Devuelve la fecha y hora actual en formato compatible con datetime-local
  obtenerFechaMinima(): string {
    return new Date().toISOString().slice(0, 16); 
  }

  // Devuelve una fecha máxima para evitar introducir años con más de 4 dígitos
  obtenerFechaMaxima(): string {
  const max = new Date();
  max.setFullYear(9999);
  return max.toISOString().slice(0, 16); 
  }

   // Evento que enviará la nueva tarea al componente padre
  @Output() crearTarea = new EventEmitter<{ texto: string; prioridad: string; fechaVencimiento: Date; }>();


  agregarTarea() {
     // Convierte la fecha introducida a un objeto Date
    const fechaSeleccionada = new Date(this.fechaVencimiento);
    const fechaActual = new Date();

     // Elimina segundos y milisegundos de ambas fechas para comparar únicamente hasta el minuto
    fechaSeleccionada.setSeconds(0, 0);
    fechaActual.setSeconds(0, 0);

    this.fechaInvalida = fechaSeleccionada < fechaActual;

    if (this.nuevaTarea.trim() !== '' && this.fechaVencimiento !== '' && !this.fechaInvalida) {
      // Enviamos la tarea al componente padre 
      this.crearTarea.emit({
        texto: this.nuevaTarea,
        prioridad: this.prioridad,
        fechaVencimiento: fechaSeleccionada 
      });

      // Limpiamos el formulario y el estado de error
      this.nuevaTarea = '';
      this.prioridad = 'media'
      this.fechaVencimiento = '';
      this.fechaInvalida = false;
    }
  }

}
