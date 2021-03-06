import Node from './Node';
import { INode } from './@types';

describe('Binary Search Tree Node', () => {
  const node: INode <number> = new Node({ value: 1 });

  it('should have a property of value', () => {
    expect(node).toHaveProperty('value');
    expect(node.value).toBe(1);
  });

  it('should have a property of left', () => {
    expect(node).toHaveProperty('left');
    expect(node.left).toBeNull();
  });

  it('should have a property of right', () => {
    expect(node).toHaveProperty('right');
    expect(node.right).toBeNull();
  });
});
