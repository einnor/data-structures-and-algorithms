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

  it('should find nodes', () => {
    const bst: IBinarySearchTree <number> = new BinarySearchTree();
    const node1: INode <number> = new Node({ value: 4 });
    const node2: INode <number> = new Node({ value: 2 });
    const node3: INode <number> = new Node({ value: 1 });
    const node4: INode <number> = new Node({ value: 3 });
    const node5: INode <number> = new Node({ value: 6 });
    const node6: INode <number> = new Node({ value: 5 });
    const node7: INode <number> = new Node({ value: 7 });

    bst.add(node1);
    bst.add(node2);
    bst.add(node3);
    bst.add(node4);
    bst.add(node5);
    bst.add(node6);
    bst.add(node7);

    expect(bst.find(4)!.value).toEqual(4);
    expect(bst.find(2)!.value).toEqual(2);
    expect(bst.find(1)!.value).toEqual(1);
    expect(bst.find(3)!.value).toEqual(3);
    expect(bst.find(6)!.value).toEqual(6);
    expect(bst.find(5)!.value).toEqual(5);
    expect(bst.find(7)!.value).toEqual(7);
  });

  it('should find nodes with parent', () => {
    const bst: IBinarySearchTree <number> = new BinarySearchTree();
    const node1: INode <number> = new Node({ value: 4 });
    const node2: INode <number> = new Node({ value: 2 });
    const node3: INode <number> = new Node({ value: 1 });
    const node4: INode <number> = new Node({ value: 3 });
    const node5: INode <number> = new Node({ value: 6 });
    const node6: INode <number> = new Node({ value: 5 });
    const node7: INode <number> = new Node({ value: 7 });

    bst.add(node1);
    bst.add(node2);
    bst.add(node3);
    bst.add(node4);
    bst.add(node5);
    bst.add(node6);
    bst.add(node7);

    expect(bst.findWithParent(4).parent).toBeUndefined();
    expect(bst.findWithParent(2)!.parent!.value).toEqual(4);
    expect(bst.findWithParent(1)!.parent!.value).toEqual(2);
    expect(bst.findWithParent(3)!.parent!.value).toEqual(2);
    expect(bst.findWithParent(6)!.parent!.value).toEqual(4);
    expect(bst.findWithParent(5)!.parent!.value).toEqual(6);
    expect(bst.findWithParent(7)!.parent!.value).toEqual(6);
  });

  it('should remove nodes - case 1', () => {
    const bst: IBinarySearchTree <number> = new BinarySearchTree();
    const node1: INode <number> = new Node({ value: 4 });
    const node2: INode <number> = new Node({ value: 2 });
    const node3: INode <number> = new Node({ value: 1 });
    const node4: INode <number> = new Node({ value: 3 });
    const node5: INode <number> = new Node({ value: 8 });
    const node6: INode <number> = new Node({ value: 6 });
    const node7: INode <number> = new Node({ value: 5 });
    const node8: INode <number> = new Node({ value: 7 });

    bst.add(node1);
    bst.add(node2);
    bst.add(node3);
    bst.add(node4);
    bst.add(node5);
    bst.add(node6);
    bst.add(node7);
    bst.add(node8);

    expect(bst.remove(10)).toBeUndefined();

    let removedNode = bst.remove(5);
    expect(removedNode!.value).toBe(5);
    expect(bst.find(6)!.left).toBeNull();
  });
});