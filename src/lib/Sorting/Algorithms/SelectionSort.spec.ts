import { SelectionSort } from '.';
import { ISort } from '../@types';

describe('Selection Sort', () => {
  it('should sort', () => {
    let sort: ISort = new SelectionSort([3, 2, 1]);
    expect(sort.sort()).toEqual([1, 2, 3]);

    sort = new SelectionSort([5, 3, 1, 4, 6]);
    expect(sort.sort()).toEqual([1, 3, 4, 5, 6]);
  });
});
