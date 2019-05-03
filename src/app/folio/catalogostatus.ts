import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'estado'})
export class Catalogostatus implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "";
    if (value=='0'){
      return 'RECIBIDO';
    }else if (value=='1'){
      return 'REPARANDO';
    }else if (value=='2'){
      return 'CORREGIDO';
    }else if (value=='3'){
      return 'ENVIADO';
    }else {
      return 'DESCONOCIDO'
    }
  }
}