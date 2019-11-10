import {Pipe, PipeTransform} from '@angular/core';
import {SortOrder} from '../../enums/sort-order.enum';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(values: any[], field: string, order = SortOrder.Asc): any {
    if (values) {
      values = values.filter(course => course);
    } else {
      return values;
    }

    if (values.length && values[0].hasOwnProperty(field)) {
      values.sort((a: any, b: any) => {

        if (order === SortOrder.Desc) {
          return this.compare(b[`${field}`], a[`${field}`]);
        } else {
          return this.compare(a[`${field}`], b[`${field}`]);
        }
      });

    }
    return values;
  }

  compare(valueA: any, valueB: any) {
    if (valueA < valueB) {
      return -1;
    } else if (valueA > valueB) {
      return 1;
    } else {
      return 0;
    }
  }

}
