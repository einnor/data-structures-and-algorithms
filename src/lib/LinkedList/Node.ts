import { INode } from './@types';

class Node <T> {
  value: T | null;
  next: INode <T> | null;

  constructor ({ value, next }: INode <T>) {
    this.value = value;
    this.next = next;
  }
};

export default Node;