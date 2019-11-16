import { ILinkedList, INode } from './@types';

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
  reset () {}
}

export default SinglyLinkedList;
