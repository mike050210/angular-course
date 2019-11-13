import {Pipe, PipeTransform} from '@angular/core';
import {SortOrder} from '../../enums/sort-order.enum';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<T>(values: T[], field: string, order = SortOrder.Asc): T[] {
    if (values) {
      values = values.filter(value => value);
    } else {
      return values;
    }

    if (values.length && values[0].hasOwnProperty(field)) {
      values.sort((a: any, b: any) => {

        if (order === SortOrder.Asc) {
          return this.compare(a[field], b[field]);
        } else {
          return this.compare(b[field], a[field]);
        }
      });

    }
    return values;
  }

  compare<T>(valueA: T, valueB: T) {
    return (valueA < valueB) ? -1 : 1;
  }

}
