import Stack from './Stack';
import Item from './Item';
import { IStack, IItem } from './@types';

describe('Stack', () => {
  it('should have default properties', () => {
    const stack: IStack <number> = new Stack();
    expect(stack.length).toBe(0);
    expect(stack.enumerable()).toEqual([]);
  });

  it('should push', () => {
    const stack: IStack <number> = new Stack();
    const item1: IItem <number> = new Item({ value: 1 });

    stack.push(item1);
    expect(stack.length).toBe(1);
    expect(stack.enumerable()[0]).toEqual(item1);

    const item2: IItem <number> = new Item({ value: 2 });

    stack.push(item2);
    expect(stack.length).toBe(2);
    expect(stack.enumerable()[1]).toEqual(item2);
  });

  it('should peek', () => {
    const stack: IStack <number> = new Stack();

    expect(stack.peek()).toBeUndefined();

    const item1: IItem <number> = new Item({ value: 1 });
    stack.push(item1);
    expect(stack.peek()).toEqual(item1);

    const item2: IItem <number> = new Item({ value: 2 });
    stack.push(item2);
    expect(stack.peek()).toEqual(item2);
  });

  it('should pop', () => {
    const stack: IStack <number> = new Stack();
    const item1: IItem <number> = new Item({ value: 1 });
    const item2: IItem <number> = new Item({ value: 2 });
    const item3: IItem <number> = new Item({ value: 3 });

    stack.push(item1);
    stack.push(item2);
    stack.push(item3);

    expect(stack.pop()).toEqual(item3);
    expect(stack.length).toBe(2);
    expect(stack.pop()).toEqual(item2);
    expect(stack.length).toBe(1);
    expect(stack.pop()).toEqual(item1);
    expect(stack.length).toBe(0);
    expect(stack.pop()).toBeUndefined();
  });

  it('should enumerate', () => {
    const stack: IStack <number> = new Stack();
    const item1: IItem <number> = new Item({ value: 1 });
    const item2: IItem <number> = new Item({ value: 2 });
    const item3: IItem <number> = new Item({ value: 3 });

    stack.push(item1);
    stack.push(item2);
    stack.push(item3);

    expect(stack.enumerable().length).toBe(3);
    expect(stack.enumerable()).toEqual([item1, item2, item3]);
  });

  it('should clear', () => {
    const stack: IStack <number> = new Stack();
    const item1: IItem <number> = new Item({ value: 1 });
    const item2: IItem <number> = new Item({ value: 2 });
    const item3: IItem <number> = new Item({ value: 3 });

    stack.push(item1);
    stack.push(item2);
    stack.push(item3);

    stack.clear();

    expect(stack.length).toBe(0);
    expect(stack.enumerable()).toEqual([]);
  });
});