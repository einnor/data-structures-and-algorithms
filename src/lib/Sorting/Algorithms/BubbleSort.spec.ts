import { BubbleSort } from '.';
import { ISort } from '../@types';

describe('Bubble Sort', () => {
  it('should sort', () => {
    const sort: ISort = new BubbleSort([3, 2, 1]);

    expect(sort.sort()).toEqual([1, 2, 3]);
  });

  it('should correctly calculate the number of comparison', () => {
    const sort: ISort = new BubbleSort([5, 3, 1, 4, 6]);
    sort.sort()

    expect(sort.comparisons).toBe(25);
  });
});
