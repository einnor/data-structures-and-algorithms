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

  it('should peek', () => {
    const queue: IQueue <number> = new Queue();

    expect(queue.peek()).toBeUndefined();

    const item1: IItem <number> = new Item({ value: 1 });
    queue.enqueue(item1);
    expect(queue.peek()).toEqual(item1);

    const item2: IItem <number> = new Item({ value: 2 });
    queue.enqueue(item2);
    expect(queue.peek()).toEqual(item2);
  });

  it('should dequeue', () => {
    const queue: IQueue <number> = new Queue();
    const item1: IItem <number> = new Item({ value: 1 });
    const item2: IItem <number> = new Item({ value: 2 });
    const item3: IItem <number> = new Item({ value: 3 });

    queue.enqueue(item1);
    queue.enqueue(item2);
    queue.enqueue(item3);

    expect(queue.dequeue()).toEqual(item3);
    expect(queue.length).toBe(2);
    expect(queue.dequeue()).toEqual(item2);
    expect(queue.length).toBe(1);
    expect(queue.dequeue()).toEqual(item1);
    expect(queue.length).toBe(0);
    expect(queue.dequeue()).toBeUndefined();
  });
});