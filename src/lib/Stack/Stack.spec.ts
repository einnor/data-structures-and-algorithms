import Stack from './Stack';
import Item from './Item';
import { IStack, IItem } from './@types';

describe('Stack', () => {
  it('should have default properties', () => {
    const stack: IStack <number> = new Stack();
    expect(stack.length).toBe(0);
    expect(stack.enumerable()).toEqual([]);
  });
});