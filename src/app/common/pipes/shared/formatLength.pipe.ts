import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatLengthUnit', standalone: true })
export class FormatUnitPipe implements PipeTransform {

  transform(value: number, unit: string): string | null {
    if (!isNaN(value) && unit) {
      switch (unit.toLowerCase()) {
        case 'meter':
          return `${value} m`;
        case 'centimeter':
          return `${value} cm`;
        case 'inch':
          return `${value} in`;
        case 'foot':
          return `${value} ft`;
        case 'kilometer':
          return `${value} km`;
        default:
          return `${value} (unknown unit)`;
      }
    }
    return null;
  }
}