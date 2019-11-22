import Item from './Item';
import { IItem } from './@types';

describe('Stack Item', () => {
  const first: IItem <number> = new Item({ value: 1 });
  const second: IItem <number> = new Item({ value: 2 });
  const third: IItem <number> = new Item({ value: 3 });

  it('should have a property of value', () => {
    expect(first).toHaveProperty('value');
    expect(first.value).toBe(1);
    expect(second.value).toBe(2);
    expect(third.value).toBe(3);
  })
});
