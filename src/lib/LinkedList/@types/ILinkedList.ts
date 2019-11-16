import INode from './INode';

type ILinkedList <T> = {
  head: INode <T> | null;
  tail: INode <T> | null;
  length: number;
  add: (node: INode <T>, position: number) => void;
  addFirst: (node: INode <T>) => void;
  addLast: (node: INode <T>) => void;
  remove: (node: INode <T>, position: number) => void;
  removeFirst: (node: INode <T>) => void;
  removeLast: (node: INode <T>) => void;
  find: (value: T) => INode <T> | undefined;
  reset: () => void;
};

export default ILinkedList;
