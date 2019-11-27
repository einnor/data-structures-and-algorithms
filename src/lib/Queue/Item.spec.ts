import Item from './Item';
import { IItem } from './@types';

describe('Queue Item', () => {
  it('should have a property of value', () => {
    const item: IItem <number> = new Item({ value: 1 });

    expect(item).toHaveProperty('value');
    expect(item.value).toBe(1);
  });
});