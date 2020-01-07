import Sort from './Sort';
import { ISort } from './@types';

describe('Sort Class', () => {
  it('should have default properties', () => {
    const sort: ISort = new Sort();

    expect(sort.swaps).toBe(0);
    expect(sort.comparisons).toBe(0);
    expect(sort.list).toEqual([]);
  });
});
