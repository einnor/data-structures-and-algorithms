import INode from './INode';

type IBinarySearchTree <T> = {
  nodeCount: number;
  root: INode <T> | null;
  add: (node: INode <T>) => void;
  addNode: (parent: INode <T>, node: INode <T>) => void;
  remove: (value: T) => INode <T> | undefined;
  find: (value: T) => INode <T> | undefined;
  findWithParent: (value: T) => [INode <T> | undefined, INode <T> | undefined];
  traversePreOrder: () => INode <T> [];
  traverseInOrder: () => INode <T> [];
  traversePostOrder: () => INode <T> [];
};

export default IBinarySearchTree;
