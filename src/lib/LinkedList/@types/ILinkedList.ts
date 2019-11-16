import INode from './INode';

type ILinkedList <T> = {
  head: INode <T>;
  tail: INode <T>
  length: number;
  add: (node: INode <T>, position: number) => void;
  addFirst: (node: INode <T>) => void;
  addLast: (node: INode <T>) => void;
  remove: (node: INode <T>, position: number) => void;
  removeFirst: (node: INode <T>) => void;
  removeLast: (node: INode <T>) => void;
  reset: () => void;
};

export default ILinkedList;
