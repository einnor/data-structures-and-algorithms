
import PriorityQueue from './PriorityQueue';
import Item from './Item';
import { IQueue, IItem } from './@types';

describe('Priority Queue', () => {
  it('should have default properties', () => {
    const queue: IQueue <number> = new PriorityQueue();

    expect(queue.length).toBe(0);
    expect(queue.enumerable()).toEqual([]);
  });
});