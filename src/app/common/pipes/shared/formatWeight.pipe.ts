import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatWeightUnit', standalone: true })
export class FormatWeightUnitPipe implements PipeTransform {

  transform(value: number, unit: string): string | null {
    if (!isNaN(value) && unit) {
      switch (unit.toLowerCase()) {
        case 'gram':
          return `${value} g`;
        case 'kilogram':
          return `${value} kg`;
        case 'pound':
          return `${value} lb`;
        case 'ounce':
          return `${value} oz`;
        default:
          return `${value} (unknown unit)`;
      }
    }
    return null;
  }
}