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

  }

  // find (value: T) : INode <T> | undefined;

  // remove (value: T) : INode <T> | undefined {};

  // findWithParent (value: T) : [INode <T> | undefined, INode <T> | undefined] {};
  // traversePreOrder () : INode <T> [] {};
  // traverseInOrder () : INode <T> [] {};
  // traversePostOrder () : INode <T> [] {};
}

export default BinarySearchTree;

