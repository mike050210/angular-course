import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeConverter'
})
export class TimeConverterPipe implements PipeTransform {

  transform(timeInMinutes: number): string {
    const hours = Math.floor(timeInMinutes / 60);
    const min = this.addTrailingZeros(timeInMinutes % 60) + 'min';
    return hours > 0 ? hours + 'h ' + min : min;
  }

  private addTrailingZeros(value: number) {
    return value < 10 ? '0' + value : value;
  }

}
