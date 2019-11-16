import INode from './INode';
import { IError } from '../../../@types';

type ILinkedList <T> = {
  head: INode <T> | null;
  tail: INode <T> | null;
  length: number;
  add: (node: INode <T>, index: number) => void | IError;
  addFirst: (node: INode <T>) => void;
  addLast: (node: INode <T>) => void;
  remove: (node: INode <T>, index: number) => void;
  removeFirst: () => INode <T> | IError;
  removeLast: () => INode <T> | IError;
  find: (value: T) => INode <T> | undefined;
  reset: () => void;
};

export default ILinkedList;
