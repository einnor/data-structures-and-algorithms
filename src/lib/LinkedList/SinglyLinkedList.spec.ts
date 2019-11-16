import SinglyLinkedList from './SinglyLinkedList';
import Node from './Node';
import { ILinkedList, INode } from './@types';
import { IError } from '../../@types';

describe('Singly Linked List', () => {
  it('should have default properties', () => {
    const linkedList: ILinkedList <number> = new SinglyLinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);
  });

  it('should add first', () => {
    const linkedList: ILinkedList <number> = new SinglyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null });

    linkedList.addFirst(node1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node1);
    expect(linkedList.length).toBe(1);

    const node2: INode<number> = new Node({ value: 2, next: null });
    linkedList.addFirst(node2);
    expect(linkedList.head).toBe(node2);
    expect(linkedList.tail).toBe(node1);
    expect(node2.next).toBe(node1);
    expect(linkedList.length).toBe(2);
  });
});