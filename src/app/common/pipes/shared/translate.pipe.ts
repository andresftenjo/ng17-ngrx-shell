import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

  transform(value: string, ...args: any[]): any {
    return this.translate.instant(value);
  }
}
