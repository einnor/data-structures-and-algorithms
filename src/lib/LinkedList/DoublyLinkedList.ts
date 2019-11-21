import { INode } from './@types';
import { IError } from '../../@types';

class DoublyLinkedList <T> {
  head: INode <T> | null = null;
  tail: INode <T> | null = null;
  length: number = 0;

  addFirst (node: INode <T>) : void {
    if (this.length === 0 || this.head === null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }

    const currentFirst = this.head;
    node.next = currentFirst;
    currentFirst.previous = node;
    this.head = node;
    this.length = this.length + 1;
  }

  addLast (node: INode <T>) : void {
    if (this.length === 0 || this.head === null || this.tail === null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }

    const currentLast = this.tail;
    currentLast.next = node;
    node.previous = currentLast;
    this.tail = node;
    this.length = this.length + 1;
  }
}

export default DoublyLinkedList;
