import INode from './INode';

type IBinarySearchTree <T> = {
  add: (node: INode <T>) => void;
  remove: (value: T) => INode <T>;
  find: (value: T) => INode <T> | undefined;
  findWithParent: (value: T) => [INode <T> | undefined, INode <T> | undefined];
  traversePreOrder: () => INode <T> [];
  traverseInOrder: () => INode <T> [];
  traversePostOrder: () => INode <T> [];
};

export default IBinarySearchTree;
