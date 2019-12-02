import INode from './INode';

type IBinarySearchTree <T> = {
  nodeCount: number;
  root: INode <T> | null;
  traversed: INode <T> [];
  add: (node: INode <T>) => void;
  _add: (parent: INode <T>, node: INode <T>) => void;
  remove: (value: T) => INode <T> | undefined;
  find: (value: T) => INode <T> | undefined;
  _find: (current: INode <T>, value: T) => INode <T> | undefined;
  findWithParent: (value: T) => { node: INode <T> | undefined, parent: INode <T> | undefined };
  _findWithParent: (value: T) => { node: INode <T> | undefined, parent: INode <T> | undefined };
  traverse: (order: 'pre' | 'in' | 'out') => INode <T> [];
  _preOrder: (current: INode <T>, result: INode <T> []) => INode <T> [];
  _inOrder: () => INode <T> [];
  _postOrder: () => INode <T> [];
};

export default IBinarySearchTree;
