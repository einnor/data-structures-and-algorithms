import INode from './INode';
import { IError } from '../../../@types';

type ILinkedList <T> = {
  head: INode <T> | null;
  tail: INode <T> | null;
  length: number;
  add: (node: INode <T>, index: number) => void | IError;
  addFirst: (node: INode <T>) => void;
  addLast: (node: INode <T>) => void;
  remove: (index: number) => INode <T> | IError;
  removeFirst: () => INode <T> | IError;
  removeLast: () => INode <T> | IError;
  find: (value: T) => number | undefined;
  enumerable: () => INode <T> [];
  reset: () => void;
};

export default ILinkedList;
