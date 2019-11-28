
import PriorityQueue from './PriorityQueue';
import Item from './Item';
import { IQueue, IItem } from './@types';

describe('Priority Queue', () => {
  it('should have default properties', () => {
    const queue: IQueue <number> = new PriorityQueue();

    expect(queue.length).toBe(0);
    expect(queue.enumerable()).toEqual([]);
  });

  it('should enqueue', () => {
    const queue: IQueue <number> = new PriorityQueue();
    const item1: IItem <number> = new Item({ value: 1, priority: 1 });

    queue.enqueue(item1);
    expect(queue.length).toBe(1);
    expect(queue.enumerable()[0]).toEqual(item1);

    const item2: IItem <number> = new Item({ value: 2, priority: 2 });
    queue.enqueue(item2);
    expect(queue.length).toBe(2);
    expect(queue.enumerable()[0]).toEqual(item2);
  });

  it('should peek', () => {
    const queue: IQueue <number> = new PriorityQueue();

    expect(queue.peek()).toBeUndefined();

    const item1: IItem <number> = new Item({ value: 1, priority: 1 });
    queue.enqueue(item1);
    expect(queue.peek()).toEqual(item1);

    const item2: IItem <number> = new Item({ value: 2, priority: 2 });
    queue.enqueue(item2);
    expect(queue.peek()).toEqual(item1);
  });

  it('should dequeue', () => {
    const queue: IQueue <number> = new PriorityQueue();
    const item1: IItem <number> = new Item({ value: 1, priority: 1 });
    const item2: IItem <number> = new Item({ value: 2, priority: 2 });
    const item3: IItem <number> = new Item({ value: 3, priority: 3 });

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

  it('should enumerate', () => {
    const queue: IQueue <number> = new PriorityQueue();
    const item1: IItem <number> = new Item({ value: 1, priority: 1 });
    const item2: IItem <number> = new Item({ value: 2, priority: 2 });
    const item3: IItem <number> = new Item({ value: 3, priority: 3 });

    queue.enqueue(item1);
    queue.enqueue(item2);
    queue.enqueue(item3);

    expect(queue.enumerable().length).toBe(3);
    expect(queue.enumerable()).toEqual([item3, item2, item1]);

    queue.dequeue();
    expect(queue.enumerable().length).toBe(2);
    expect(queue.enumerable()).toEqual([item2, item1]);
  });

  it('should clear', () => {
    const queue: IQueue <number> = new PriorityQueue();
    const item1: IItem <number> = new Item({ value: 1, priority: 1 });
    const item2: IItem <number> = new Item({ value: 2, priority: 2 });
    const item3: IItem <number> = new Item({ value: 3, priority: 3 });

    queue.enqueue(item1);
    queue.enqueue(item2);
    queue.enqueue(item3);

    queue.clear();

    expect(queue.length).toBe(0);
    expect(queue.enumerable()).toEqual([]);
  });
});