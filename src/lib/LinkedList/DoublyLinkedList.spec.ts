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

  it('should add first', () => {
    const linkedList: ILinkedList <number> = new DoublyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null, previous: null });

    linkedList.addFirst(node1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node1);
    expect(linkedList.length).toBe(1);

    const node2: INode<number> = new Node({ value: 2, next: null, previous: null });
    linkedList.addFirst(node2);
    expect(linkedList.head).toBe(node2);
    expect(linkedList.tail).toBe(node1);
    expect(node2.next).toBe(node1);
    expect(node1.previous).toBe(node2);
    expect(linkedList.length).toBe(2);
  });

  it('should add last', () => {
    const linkedList: ILinkedList <number> = new DoublyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null, previous: null });

    linkedList.addLast(node1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node1);
    expect(linkedList.length).toBe(1);

    const node2: INode<number> = new Node({ value: 2, next: null, previous: null });
    linkedList.addLast(node2);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node1.next).toBe(node2);
    expect(node2.previous).toBe(node1);
    expect(node1.previous).toBeNull();
    expect(linkedList.length).toBe(2);
  });
});
