import { INode, IBinarySearchTree } from './@types';

class BinarySearchTree <T> implements IBinarySearchTree <T> {
  nodeCount: number = 0;

  root: INode <T> | null = null;

  add (node: INode <T>) : void {
    if (this.root === null) {
      this.root = node;
      return;
    }

    this.addNode(this.root, node);
  };

  addNode (parent: INode <T>, node: INode <T>) : void {
    if (parent.value > node.value) {
      if (parent.left === null) {
        parent.left = node;
        return;
      }
      this.addNode(parent.left, node);
    } else {
      if (parent.right === null) {
        parent.right = node;
        return;
      }
      this.addNode(parent.right, node);
    }
  }

  find (value: T) : INode <T> | undefined {
    if (this.root.value === value) {
      return this.root;
    }

    return this.findNode(this.root, value);
  };

  findNode (current: INode <T>, value : T) : INode <T> | undefined {
    if (current === null) {
      return undefined;
    }

    if (current.value === value) {
      return current;
    }

    if
  }

  // remove (value: T) : INode <T> | undefined {};

  // findWithParent (value: T) : [INode <T> | undefined, INode <T> | undefined] {};
  // traversePreOrder () : INode <T> [] {};
  // traverseInOrder () : INode <T> [] {};
  // traversePostOrder () : INode <T> [] {};
}

export default BinarySearchTree;

