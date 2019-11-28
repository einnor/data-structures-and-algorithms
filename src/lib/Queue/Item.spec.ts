import Item from './Item';
import { IItem } from './@types';

describe('Queue Item', () => {
  it('should have a property of value', () => {
    const item: IItem <number> = new Item({ value: 1 });

    expect(item).toHaveProperty('value');
    expect(item.value).toBe(1);
  });

  it('should have a property of priority which defaults to undefined', () => {
    const item: IItem <number> = new Item({ value: 1 });

    expect(item).toHaveProperty('priority');
    expect(item.priority).toBeUndefined();
  });

  it('should have a property of priority when defined', () => {
    const item: IItem <number> = new Item({ value: 1, priority: 1 });

    expect(item).toHaveProperty('priority');
    expect(item.priority).toBe(1);
  });
});