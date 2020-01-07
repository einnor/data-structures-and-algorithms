import { BubbleSort } from '.';
import { ISort } from '../@types';

describe('Bubble Sort', () => {
  it('should sort', () => {
    const sort: ISort = new BubbleSort([3, 2, 1]);

    expect(sort.sort()).toEqual([1, 2, 3]);
  });

  it('should correctly calculate the number of comparisons', () => {
    let sort: ISort = new BubbleSort([5, 3, 1, 4, 6]);
    sort.sort();

    expect(sort.comparisons).toBe(25);

    sort = new BubbleSort([3, 2, 1]);
    sort.sort();

    expect(sort.comparisons).toBe(9);
  });

  it('should correctly calculate the number of swaps', () => {
    let sort: ISort = new BubbleSort([5, 3, 1, 4, 6]);
    sort.sort();

    expect(sort.swaps).toBe(4);

    sort = new BubbleSort([3, 2, 1]);
    sort.sort();

    expect(sort.swaps).toBe(3);
  });
});
