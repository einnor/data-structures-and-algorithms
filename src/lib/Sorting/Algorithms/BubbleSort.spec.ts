import { BubbleSort } from '.';
import { ISort } from '../@types';

describe('Bubble Sort', () => {
  it('should sort', () => {
    const sort: ISort = new BubbleSort([3, 2, 1]);

    expect(sort.sort()).toEqual([1, 2, 3]);
  });
});
