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
});