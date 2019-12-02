import INode from './INode';

type IBinarySearchTree <T> = {
  nodeCount: number;
  root: INode <T> | null;
  add: (node: INode <T>) => void;
  _add: (parent: INode <T>, node: INode <T>) => void;
  remove: (value: T) => INode <T> | undefined;
  find: (value: T) => INode <T> | undefined;
  _find: (current: INode <T>, value: T) => INode <T> | undefined;
  findWithParent: (value: T) => { node: INode <T> | undefined, parent: INode <T> | undefined };
  _findWithParent: (value: T) => { node: INode <T> | undefined, parent: INode <T> | undefined };
  traversePreOrder: () => INode <T> [];
  traverseInOrder: () => INode <T> [];
  traversePostOrder: () => INode <T> [];
};

export default IBinarySearchTree;
