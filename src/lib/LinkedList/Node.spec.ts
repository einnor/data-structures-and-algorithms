import Node from './Node';
import { INode } from './@types';

describe('Node', () => {
  const third: INode <number> = new Node({ value: 3, next: null });
  const second: INode <number> = new Node({ value: 2, next: third });
  const first: INode <number> = new Node({ value: 1, next: second });

  it('should have a propery of value', () => {
    expect(first).toHaveProperty('value');
    expect(first.value).toBe(1);
    expect(second.value).toBe(2);
    expect(third.value).toBe(3);
  });

  it('should have a propery of next', () => {
    expect(first).toHaveProperty('next');
    expect(first.next).toBe(second);
    expect(second.next).toBe(third);
    expect(third.next).toBe(null);
  });

  it('should have a propery of previous which is equal to undefined by default', () => {
    expect(first).toHaveProperty('previous');
    expect(first.previous).toBe(undefined);
    expect(second.previous).toBe(undefined);
    expect(third.previous).toBe(undefined);
  });
});