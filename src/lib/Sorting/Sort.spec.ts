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

  it('should generate ordered list of size N, from 1..N', () => {
    const size: number = 10;
    const sort: ISort = new Sort();
    sort.generateOrderedList(size);

    expect(sort.list.length).toBe(size);
    expect(sort.list).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should reset values', () => {
    const size: number = 10;
    const sort: ISort = new Sort();
    sort.generateOrderedList(size);
    sort.reset()

    expect(sort.swaps).toBe(0);
    expect(sort.comparisons).toBe(0);
    expect(sort.list).toEqual([]);
  });
});
