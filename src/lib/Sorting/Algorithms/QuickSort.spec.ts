import { QuickSort } from  '.';
import { ISort } from '../@types';

describe('Quick Sort', () => {
  it('should sort', () => {
    let sort: ISort = new QuickSort([3, 2, 1]);
    expect(sort.sort()).toEqual([1, 2, 3]);

    sort = new QuickSort([5, 3, 1, 4, 6]);
    expect(sort.sort()).toEqual([1, 3, 4, 5, 6]);
  });

  it('should correctly calculate the number of comparisons', () => {
    let sort: ISort = new QuickSort([5, 3, 1, 4, 6]);
    sort.sort();
    expect(sort.comparisons).toBe(8);

    sort = new QuickSort([3, 2, 1]);
    sort.sort();
    expect(sort.comparisons).toBe(3);
  });
});
