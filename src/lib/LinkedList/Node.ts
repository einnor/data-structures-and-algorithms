import { INode } from './@types';

class Node <T> {
  value: T | null = null;
  next: INode <T> | null = null;
  previous: INode <T> | null | undefined = undefined;

  constructor ({ value, next, previous }: INode <T>) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
};

export default Node;