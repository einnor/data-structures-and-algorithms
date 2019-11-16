import { INode } from './@types';

class Node <T> {
  value: T | null;
  next: INode <T> | null;
  previous: INode <T> | null | undefined;

  constructor ({ value, next, previous }: INode <T>) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
};

export default Node;