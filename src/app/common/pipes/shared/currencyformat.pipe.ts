import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../../services/shared/currency.service';
import { Observable, map, switchMap } from 'rxjs';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe, private currencyService: CurrencyService) {
  }

  transform(value: number, targetCurrency: string): string | null {
    return this.currencyPipe.transform(value, targetCurrency, 'symbol', '1.2-2');
  }
}
