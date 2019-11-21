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

  it('should add a node at a specific index in the chain', () => {
    const linkedList: ILinkedList <number> = new DoublyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null, previous: null });

    expect(linkedList.add(node1, 100)).toEqual({ message: 'Out of range error' });
    expect(linkedList.add(node1, -1)).toEqual({ message: 'Out of range error' });

    linkedList.add(node1, 0);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node1);
    expect(linkedList.length).toBe(1);

    const node2: INode<number> = new Node({ value: 2, next: null, previous: null });
    linkedList.add(node2, 1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node1.next).toBe(node2);
    expect(node2.previous).toBe(node1);
    expect(linkedList.length).toBe(2);

    const node3: INode<number> = new Node({ value: 3, next: null, previous: null });
    linkedList.add(node3, 1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node1.next).toBe(node3);
    expect(node3.previous).toBe(node1);
    expect(linkedList.length).toBe(3);

    const node4: INode<number> = new Node({ value: 4, next: null, previous: null });
    linkedList.add(node4, 2);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node3.next).toBe(node4);
    expect(node4.previous).toBe(node3);
    expect(linkedList.length).toBe(4);
  });

  it('should remove first', () => {
    const linkedList: ILinkedList <number> = new DoublyLinkedList();

    expect(linkedList.removeFirst()).toEqual({ message: 'Invalid operation. Length of the linked list is 0' });

    const node1: INode<number> = new Node({ value: 1, next: null, previous: null });
    const node2: INode<number> = new Node({ value: 2, next: null, previous: null });
    const node3: INode<number> = new Node({ value: 3, next: null, previous: null });
    linkedList.addFirst(node3);
    linkedList.addFirst(node2);
    linkedList.addFirst(node1);
    expect(linkedList.length).toBe(3);
    expect(linkedList.head).toEqual(new Node({ value: 1, next: node2, previous: null }));

    linkedList.removeFirst();
    expect(linkedList.length).toBe(2);
    expect(linkedList.head).toEqual(new Node({ value: 2, next: node3, previous: null }));

    linkedList.removeFirst();
    expect(linkedList.length).toBe(1);
    expect(linkedList.head).toEqual(node3);

    linkedList.removeFirst();
    expect(linkedList.length).toBe(0);
    expect(linkedList.head).toBeNull();
  });

  it('should remove last', () => {
    const linkedList: ILinkedList <number> = new DoublyLinkedList();

    expect(linkedList.removeFirst()).toEqual({ message: 'Invalid operation. Length of the linked list is 0' });

    const node1: INode<number> = new Node({ value: 1, next: null, previous: null });
    const node2: INode<number> = new Node({ value: 2, next: null, previous: null });
    const node3: INode<number> = new Node({ value: 3, next: null, previous: null });
    linkedList.addFirst(node3);
    linkedList.addFirst(node2);
    linkedList.addFirst(node1);
    expect(linkedList.length).toBe(3);
    expect(linkedList.tail).toEqual(node3);

    expect(linkedList.removeLast()).toEqual(node3);
    expect(linkedList.length).toBe(2);
    expect(linkedList.tail).toEqual(node2);

    expect(linkedList.removeLast()).toEqual(node2);
    expect(linkedList.length).toBe(1);
    expect(linkedList.tail).toEqual(node1);

    expect(linkedList.removeLast()).toEqual(node1);
    expect(linkedList.length).toBe(0);
    expect(linkedList.tail).toBeNull();
  });
});
