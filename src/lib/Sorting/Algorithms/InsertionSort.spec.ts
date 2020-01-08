import { InsertionSort } from  '.';
import { ISort } from '../@types';

describe('Insertion Sort', () => {
  it('should sort', () => {
    const sort: ISort = new InsertionSort([3, 2, 1]);

    expect(sort.sort()).toEqual([1, 2, 3]);
  })
});
