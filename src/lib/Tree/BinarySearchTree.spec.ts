import BinarySearchTree from './BinarySearchTree';
import Node from './Node';
import { IBinarySearchTree, INode } from './@types';

describe('Binary Search Tree', () => {
  it('should have default properties', () => {
    const bst: IBinarySearchTree <number> = new BinarySearchTree();

    expect(bst.root).toBeNull();
    expect(bst.nodeCount).toBe(0);
  });

  it('should add nodes', () => {
    const bst: IBinarySearchTree <number> = new BinarySearchTree();
    const node1: INode <number> = new Node({ value: 4 });

    bst.add(node1);
    expect(bst.root).toEqual(node1);
    expect(bst.nodeCount).toBe(1);

    const node2: INode <number> = new Node({ value: 2 });
    const node3: INode <number> = new Node({ value: 1 });
    const node4: INode <number> = new Node({ value: 3 });
    const node5: INode <number> = new Node({ value: 6 });

    bst.add(node2);
    bst.add(node3);
    bst.add(node4);
    bst.add(node5);
    expect(bst.root!.left!.value).toBe(2);
    expect(bst.root!.right!.value).toBe(6);
  });
});