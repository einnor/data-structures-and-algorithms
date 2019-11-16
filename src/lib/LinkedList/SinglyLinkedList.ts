import { ILinkedList, INode } from './@types';
import {isNull} from 'util';

class SinglyLinkedList <T> {
  head: INode <T> | null = null;
  tail: INode <T> | null = null;
  length: number = 0;


  add (node: INode <T>, position: number) {}

  addFirst (node: INode <T>) {}

  addLast (node: INode <T>) {}

  remove (node: INode <T>, position: number) {}

  removeFirst (node: INode <T>) {}

  removeLast (node: INode <T>) {}

  find (value: T) : INode <T> | undefined {
    let current = this.head;

    if (isNull(current)) {
      return undefined;
    }

    do {
      if (isNull(current) || isNull (current.next)) {
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
