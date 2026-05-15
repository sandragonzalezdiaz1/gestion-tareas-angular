import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaVencimiento'
})

export class FechaVencimientoPipe implements PipeTransform {

  transform(fecha: Date, fechaActual: Date): string {

     // Convierte la fecha recibida a objeto Date
    const fechaTarea = new Date(fecha);

    // Diferencia en milisegundos
    const diferenciaMs = fechaTarea.getTime() - fechaActual.getTime();

    // Obtiene el valor absoluto de la diferencia
    const diferencia = Math.abs(diferenciaMs);

    const minutos = Math.floor(diferencia / (1000 * 60));
    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));


    let tiempo: string = '';

    if (dias > 0) {
      tiempo = `${dias} día${dias !== 1 ? 's' : ''}`;
      
    } else if (horas > 0) {
      tiempo = `${horas} hora${horas !== 1 ? 's' : ''}`;

    } else if (minutos > 0) {
      tiempo = `${minutos} minuto${minutos !== 1 ? 's' : ''}`;

    } else {
      return 'Vence ahora mismo';
    }

    const esSingular = dias === 1 || horas === 1 || minutos === 1;

    return diferenciaMs >= 0 ? `${esSingular ? 'Queda': 'Quedan'} ${tiempo}` : `Vencida hace ${tiempo}`;

  }

}
