import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatVolumeUnit', standalone: true })
export class FormatVolumeUnitPipe implements PipeTransform {

  transform(value: number, unit: string): string | null {
    if (!isNaN(value) && unit) {
      switch (unit.toLowerCase()) {
        case 'liter':
          return `${value} L`;
        case 'milliliter':
          return `${value} ml`;
        case 'gallon':
          return `${value} gal`;
        case 'fluid ounce':
          return `${value} fl oz`;
        default:
          return `${value} (unknown unit)`;
      }
    }
    return null;
  }
}