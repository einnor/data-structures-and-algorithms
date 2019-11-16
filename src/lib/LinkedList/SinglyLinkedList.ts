import { ILinkedList, INode } from './@types';
import { IError } from '../../@types';

class SinglyLinkedList <T> {
  head: INode <T> | null = null;
  tail: INode <T> | null = null;
  length: number = 0;


  add (node: INode <T>, position: number) {}

  addFirst (node: INode <T>) {}

  addLast (node: INode <T>) {}

  remove (node: INode <T>, position: number) {}

  removeFirst () {}

  removeLast (): INode <T> | IError {
    if (this.length === 0 || this.head === null) {
      return { message: 'Invalid operation. Length of the linked list is 0' };
    }

    let removedNode: INode <T>;

    if (this.length === 1) {
      removedNode = this.head;
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

    return current;
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
