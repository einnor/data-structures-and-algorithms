import Sort from './Sort';
import { ISort } from './@types';

describe('Sort Class', () => {
  it('should have default properties', () => {
    const sort: ISort = new Sort();

    expect(sort.swaps).toBe(0);
    expect(sort.comparisons).toBe(0);
    expect(sort.list).toEqual([]);
  });

  it('should accept a list in constructor', () => {
    const list: number[] = [1, 2, 3];
    const sort: ISort = new Sort(list);

    expect(sort.list).toEqual(list);
  });

  it('should generate random list of size N', () => {
    const size: number = 10;
    const sort: ISort = new Sort();

    expect(sort.generateRandomList(size).length).toBe(size);
  });
});
