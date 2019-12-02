import { INode, IBinarySearchTree } from './@types';

class BinarySearchTree <T> implements IBinarySearchTree <T> {
  nodeCount: number = 0;

  root: INode <T> | null = null;

  add (node: INode <T>) : void {
    if (this.root === null) {
      this.root = node;
      return;
    }

    this._add(this.root, node);
  };

  _add (parent: INode <T>, node: INode <T>) : void {
    if (parent.value > node.value) {
      if (parent.left === null) {
        parent.left = node;
        return;
      }
      this._add(parent.left, node);
    } else {
      if (parent.right === null) {
        parent.right = node;
        return;
      }
      this._add(parent.right, node);
    }
  }

  find (value: T) : INode <T> | undefined {
    if (this.root.value === value) {
      return this.root;
    }

    return this._find(this.root, value);
  };

  _find (current: INode <T>, value : T) : INode <T> | undefined {
    if (current === null) {
      return undefined;
    }

    if (current.value === value) {
      return current;
    }

    if (current.value > value) {
      return this._find(current.left, value);
    }

    return this._find(current.right, value);
  }

  _findNodeWithParent (parent: INode <T> | undefined, current: INode <T>, value: T) : { node: INode <T> | undefined, parent: INode <T> | undefined } {
    if (current === null) {
      return { node: undefined, parent: undefined };
    }

    if (current.value === value) {
      return { node: current, parent };
    }

    if (current.value > value) {
      return this._findNodeWithParent(current, current.left, value);
    }

    return this._findNodeWithParent(current, current.right, value);
  }

  findWithParent (value: T) : { node: INode <T> | undefined, parent: INode <T> | undefined } {
    if (this.root.value === value) {
      return { node: this.root , parent: undefined };
    }

    return this._findNodeWithParent(undefined, this.root, value);
  };

  // remove (value: T) : INode <T> | undefined {

  // };

  // traversePreOrder () : INode <T> [] {};
  // traverseInOrder () : INode <T> [] {};
  // traversePostOrder () : INode <T> [] {};
}

export default BinarySearchTree;

