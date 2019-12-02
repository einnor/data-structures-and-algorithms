import BinarySearchTree from './BinarySearchTree';
import Node from './Node';
import { IBinarySearchTree, INode } from './@types';

describe('Binary Search Tree', () => {
  it('should have default properties', () => {
    const bst: IBinarySearchTree <number> = new BinarySearchTree();

    expect(bst.root).toBeNull();
    expect(bst.nodeCount).toBe(0);
  });
});