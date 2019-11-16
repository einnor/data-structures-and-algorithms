import { ILinkedList, INode } from './@types';
import { IError } from '../../@types';

class SinglyLinkedList <T> {
  head: INode <T> | null = null;
  tail: INode <T> | null = null;
  length: number = 0;


  add (node: INode <T>, index: number) : void | IError {
    if (index > this.length || index < 0) {
      return { message: 'Out of range error' };
    }

    if (this.head === null && index === 0) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return;
    }

    if (this.head !== null) {
      let idx: number = 0;
      let current = this.head;
      let previous = this.head;

      while (current.next !== null) {
        previous = current;
        current = current.next;
        if (idx === index) {
          previous.next = node;
          node.next = current;
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
    }

    const currentFirst = this.head;
    node.next = currentFirst;
    this.head = node;
    this.length = this.length + 1;
  }

  addLast (node: INode <T>) : void {
    if (this.length === 0 || this.head === null) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    }

    const currentLast = this.tail;
    node.next = currentLast;
    this.tail = node;
    this.length = this.length + 1;
  }

  remove (node: INode <T>, index: number) {}

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
    return removedNode
  }

  removeLast () : INode <T> | IError {
    if (this.length === 0 || this.head === null || this.tail === null) {
      return { message: 'Invalid operation. Length of the linked list is 0' };
    }

    const removedNode: INode <T> = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    let previous: INode <T> = this.head;
    let current = this.head;

    while (current.next !== null) {
      previous = current;
      current = current.next;
    }

    previous.next === null;
    this.tail = previous;
    this.length = this.length - 1;

    return removedNode;
  }

  find (value: T) : INode <T> | undefined {
    let current = this.head;

    if (this.length === 0 || this.head === null) {
      return undefined;
    }

    do {
      if (current === null || current.next === null) {
        return undefined;
      }

      if (current.value === value) {
        return current;
      }

      current = current.next;
    } while (current.next !== null);

    return undefined;
  }

  reset () : void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

export default SinglyLinkedList;
