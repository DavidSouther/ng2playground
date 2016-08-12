import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'uppercase'})
export class UppercasePipe implements PipeTransform {
  transform(s: string): string {
    return s.toLocaleUpperCase();
  }
}