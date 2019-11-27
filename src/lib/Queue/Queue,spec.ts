import Queue from './Queue';
import Item from './Item';
import { IQueue, IItem } from './@types';

describe('Queue', () => {
  it('should have default properties', () => {
    const queue: IQueue <number> = new Queue();

    expect(queue.length).toBe(0);
    expect(queue.enumerable()).toEqual([]);
  });
});