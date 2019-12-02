import INode from './INode';

type IBinarySearchTree <T> = {
  nodeCount: number;
  root: INode <T> | null;
  add: (node: INode <T>) => void;
  _add: (parent: INode <T>, node: INode <T>) => void;
  remove: (value: T) => INode <T> | undefined;
  find: (value: T) => INode <T> | undefined;
  _find: (current: INode <T>, value: T) => INode <T> | undefined;
  findWithParent: (value: T) => { node: INode <T> | null, parent: INode <T> | undefined };
  _findWithParent: (parent: INode <T> | undefined, current: INode <T> | null, value: T) => { node: INode <T> | null, parent: INode <T> | undefined };
  traverse: (order: 'pre' | 'in' | 'out') => INode <T> [];
  _preOrder: (current: INode <T>, result: INode <T> []) => INode <T> [];
  _inOrder: (current: INode <T>, result: INode <T> []) => INode <T> [];
  _postOrder: (current: INode <T>, result: INode <T> []) => INode <T> [];
};

export default IBinarySearchTree;
