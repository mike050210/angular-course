import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeConverter'
})
export class TimeConverterPipe implements PipeTransform {

  transform(timeInMinutes: number): string {
    return this.addTrailingZeros(Math.floor(timeInMinutes / 60))
      + ':'
      + this.addTrailingZeros(timeInMinutes % 60);
  }

  private addTrailingZeros(value: number) {
    return value < 10 ? '0' + value : value;
  }

}
