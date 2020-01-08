import { SelectionSort } from '.';
import { ISort } from '../@types';

describe('Selection Sort', () => {
  it('should sort', () => {
    let sort: ISort = new SelectionSort([3, 2, 1]);
    expect(sort.sort()).toEqual([1, 2, 3]);

    sort = new SelectionSort([5, 3, 1, 4, 6]);
    expect(sort.sort()).toEqual([1, 3, 4, 5, 6]);
  });

  it('should correctly calculate the number of comparisons', () => {
    let sort: ISort = new SelectionSort([5, 3, 1, 4, 6]);
    sort.sort();
    expect(sort.comparisons).toBe(10);

    sort = new SelectionSort([3, 2, 1]);
    sort.sort();
    expect(sort.comparisons).toBe(3);
  });

  it('should correctly calculate the number of swaps', () => {
    let sort: ISort = new SelectionSort([5, 3, 1, 4, 6]);
    sort.sort();
    expect(sort.swaps).toBe(2);

    sort = new SelectionSort([3, 2, 1]);
    sort.sort();
    expect(sort.swaps).toBe(1);
  });
});
