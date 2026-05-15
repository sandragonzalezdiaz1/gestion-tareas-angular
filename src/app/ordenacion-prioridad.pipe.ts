import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarPrioridad'
})

export class OrdenacionPrioridadPipe implements PipeTransform {

  transform(tareas: any[]): any[] {

    // Asigna un valor numérico a cada prioridad
    const prioridades: any = {
      alta: 1,
      media: 2,
      baja: 3
    };

    return [...tareas].sort((a, b) => prioridades[a.prioridad] - prioridades[b.prioridad]);

  }

}
