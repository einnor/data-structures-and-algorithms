import DoublyLinkedList from './DoublyLinkedList';
import Node from './Node';
import { ILinkedList, INode } from './@types';

describe('Doubly Linked List', () => {
  it('should have default properties', () => {
    const linkedList: ILinkedList <number> = new DoublyLinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);
  });
});
