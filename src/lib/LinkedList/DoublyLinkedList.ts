import { INode } from './@types';
import { IError } from '../../@types';

class DoublyLinkedList <T> {
  head: INode <T> | null = null;
  tail: INode <T> | null = null;
  length: number = 0;

  add (node: INode <T>, index: number) : void | IError {
    if (index > this.length || index < 0) {
      return { message: 'Out of range error' };
    }

    if (index === 0) {
      this.addFirst(node);
      return;
    }

    if (index === this.length) {
      this.addLast(node);
      return;
    }

    if (this.head !== null) {
      let idx: number = 1;
      let current = this.head;
      let previous: INode <T>;

      while (current.next !== null) {
        previous = current;
        current = current.next;
        if (idx === index) {
          previous.next = node;
          node.previous = previous;
          node.next = current;
          current.previous = node;
          this.length = this.length + 1;
          return;
        }

        idx = idx + 1;
      }
    }
  }


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

  removeFirst () : INode <T> | IError {
    if (this.length === 0 || this.head === null) {
      return { message: 'Invalid operation. Length of the linked list is 0' };
    }

    const removedNode: INode <T> = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    this.head = removedNode.next;
    this.length = this.length - 1;
    return removedNode;
  }
}

export default DoublyLinkedList;
