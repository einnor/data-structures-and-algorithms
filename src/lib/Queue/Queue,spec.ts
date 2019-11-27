import Queue from './Queue';
import Item from './Item';
import { IQueue, IItem } from './@types';

describe('Queue', () => {
  it('should have default properties', () => {
    const queue: IQueue <number> = new Queue();

    expect(queue.length).toBe(0);
    expect(queue.enumerable()).toEqual([]);
  });

  it('should enqueue', () => {
    const queue: IQueue <number> = new Queue();
    const item1: IItem <number> = new Item({ value: 1 });

    queue.enqueue(item1);
    expect(queue.length).toBe(1);
    expect(queue.enumerable()[0]).toEqual(item1);

    const item2: IItem <number> = new Item({ value: 2 });
    queue.enqueue(item2);
    expect(queue.length).toBe(2);
    expect(queue.enumerable()[1]).toEqual(item2);
  });
});