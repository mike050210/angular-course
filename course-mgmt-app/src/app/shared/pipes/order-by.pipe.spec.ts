import {OrderByPipe} from './order-by.pipe';
import {SortOrder} from '../../enums/sort-order.enum';

interface TestClass {
  id: number;
  name: String;
  created: Date;
}

describe('OrderByPipe', () => {

  let orderBy: OrderByPipe;
  let arrayToSort: TestClass[];

  beforeEach(() => {
    orderBy = new OrderByPipe();
    arrayToSort = [
      {id: 123, name: 'test 3', created: new Date(2019, 2, 14)},
      null,
      {id: 789, name: 'test 1', created: new Date(2017, 11, 12)},
      {id: 456, name: 'test 2', created: new Date(2013, 1, 1)},
      null
    ];
  });

  it('create an instance', () => {
    expect(orderBy).toBeTruthy();
  });

  it('does not sort null or empty array', () => {
    expect(orderBy.transform(null, '', SortOrder.Desc)).toEqual(null);
    expect(orderBy.transform([], '', SortOrder.Asc)).toEqual([]);
  });


  it('does not sort under non-existing field', () => {
    const expected: TestClass[] = [
      {id: 123, name: 'test 3', created: new Date(2019, 2, 14)},
      {id: 789, name: 'test 1', created: new Date(2017, 11, 12)},
      {id: 456, name: 'test 2', created: new Date(2013, 1, 1)}
    ];
    expect(orderBy.transform(arrayToSort, 'nonExistingField', SortOrder.Desc)).toEqual(expected);
  });

  it('sorts on Ascending order', () => {
    const expected: TestClass[] = [
      {id: 123, name: 'test 3', created: new Date(2019, 2, 14)},
      {id: 456, name: 'test 2', created: new Date(2013, 1, 1)},
      {id: 789, name: 'test 1', created: new Date(2017, 11, 12)}
    ];
    expect(orderBy.transform(arrayToSort, 'id', SortOrder.Asc)).toEqual(expected);
  });

  it('sorts on Descending order', () => {
    const expected: TestClass[] = [
      {id: 123, name: 'test 3', created: new Date(2019, 2, 14)},
      {id: 789, name: 'test 1', created: new Date(2017, 11, 12)},
      {id: 456, name: 'test 2', created: new Date(2013, 1, 1)}
    ];
    expect(orderBy.transform(arrayToSort, 'created', SortOrder.Desc)).toEqual(expected);
  });

  it('sorts on default order (Ascending)', () => {
    const expected: TestClass[] = [
      {id: 789, name: 'test 1', created: new Date(2017, 11, 12)},
      {id: 456, name: 'test 2', created: new Date(2013, 1, 1)},
      {id: 123, name: 'test 3', created: new Date(2019, 2, 14)}
    ];
    expect(orderBy.transform(arrayToSort, 'name')).toEqual(expected);
  });

});
