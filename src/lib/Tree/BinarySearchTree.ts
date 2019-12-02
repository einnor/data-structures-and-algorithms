import { INode, IBinarySearchTree } from './@types';

class BinarySearchTree <T> implements IBinarySearchTree <T> {
  nodeCount: number = 0;

  root: INode <T> | null = null;

  add (node: INode <T>) : void {
    if (this.root === null) {
      this.root = node;
      this.nodeCount = 1;
      return;
    }

    this._add(this.root, node);
  };

  _add (parent: INode <T>, node: INode <T>) : void {
    if (parent.value > node.value) {
      if (parent.left === null) {
        parent.left = node;
        this.nodeCount = this.nodeCount + 1;
        return;
      }
      this._add(parent.left, node);
    } else {
      if (parent.right === null) {
        parent.right = node;
        this.nodeCount = this.nodeCount + 1;
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

  _findWithParent (parent: INode <T> | undefined, current: INode <T> | null, value: T) : { node: INode <T> | null, parent: INode <T> | undefined } {
    if (current === null) {
      return { node: null, parent };
    }

    if (current.value === value) {
      return { node: current, parent };
    }

    if (current.value !== null && current.value > value) {
      return this._findWithParent(current, current.left, value);
    }

    return this._findWithParent(current, current.right, value);
  }

  findWithParent (value: T) : { node: INode <T> | null, parent: INode <T> | undefined } {
    if (this.root && this.root.value === value) {
      return { node: this.root , parent: undefined };
    }

    return this._findWithParent(undefined, this.root, value);
  };

  remove (value: T) : INode <T> | undefined {
    const result = this.findWithParent(value);

    if (result.node === undefined) {
      return undefined;
    }

    const removedNode = result.node;
    const side = result.parent.left.value === result.node.value ? 'left' : 'right';

    // Case 1
    // Removed node is leaf node
    if (removedNode.left === removedNode.right === null) {
      this.nodeCount = this.nodeCount - 1;
      return removedNode;
    }

    // Case 2
    // Removed node has left child which has no right child
    // Promote left child of removed node
    if (removedNode.left && removedNode.left.right === null) {
      result.parent[side] = removedNode.left;
      removedNode.left.right = removedNode.right;
      this.nodeCount = this.nodeCount - 1;
      return removedNode;
    }

    // Case 3
    // Removed node has right child which has no left child
    // Right child of removed node replaces the removed node
    if (removedNode.right && removedNode.right.left === null) {
      result.parent[side] = removedNode.right;
      this.nodeCount = this.nodeCount - 1;
      return removedNode;
    }

    // Case 4
    // Removed node has right child which has a left child
    // Right child's left most child replaces the removed node
    if (removedNode.right && removedNode.right.left) {
      let rightChildsLeftMostChild = removedNode.right.left;
      while (rightChildsLeftMostChild !== null) {
        const parent = rightChildsLeftMostChild;
        rightChildsLeftMostChild = rightChildsLeftMostChild.left;

        if (rightChildsLeftMostChild === null) {
          parent.left = null;
        }
      }
      result.parent[side] = rightChildsLeftMostChild;
      this.nodeCount = this.nodeCount - 1;
      return removedNode;
    }
  };

  traverse (order: string) : INode <T> [] {
    const result: INode <T> [] = [];
    switch (order) {
      case 'pre':
        return this._preOrder(this.root, result);
      case 'in':
        return this._inOrder(this.root, result);
      case 'post':
        return this._postOrder(this.root, result);
      default:
        return [];
    }
  }

  _preOrder (current: INode <T>, result: INode <T> []) : INode <T> [] {
    if (current === null) {
      return result;
    }

    // Process
    result.push(current);

    this._preOrder(current.left, result);
    this._preOrder(current.right, result);

    return result;
  };

  _inOrder (current: INode <T>, result: INode <T> []) : INode <T> [] {
    if (current === null) {
      return result;
    }

    this._inOrder(current.left, result);

    // Process
    result.push(current);

    this._inOrder(current.right, result);

    return result;
  };

  _postOrder (current: INode <T>, result: INode <T> []) : INode <T> [] {
    if (current === null) {
      return result;
    }

    this._postOrder(current.left, result);
    this._postOrder(current.right, result);

    // Process
    result.push(current);

    return result;
  };
}

export default BinarySearchTree;

