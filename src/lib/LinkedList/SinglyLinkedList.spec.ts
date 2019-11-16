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

  it('should add last', () => {
    const linkedList: ILinkedList <number> = new SinglyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null });

    linkedList.addLast(node1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node1);
    expect(linkedList.length).toBe(1);

    const node2: INode<number> = new Node({ value: 2, next: null });
    linkedList.addLast(node2);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node1.next).toBe(node2);
    expect(linkedList.length).toBe(2);
  });

  it('should add a node at a specific index in the chain', () => {
    const linkedList: ILinkedList <number> = new SinglyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null });

    expect(linkedList.add(node1, 100)).toEqual({ message: 'Out of range error' });
    expect(linkedList.add(node1, -1)).toEqual({ message: 'Out of range error' });

    linkedList.add(node1, 0);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node1);
    expect(linkedList.length).toBe(1);

    const node2: INode<number> = new Node({ value: 2, next: null });
    linkedList.add(node2, 1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node1.next).toBe(node2);
    expect(linkedList.length).toBe(2);

    const node3: INode<number> = new Node({ value: 3, next: null });
    linkedList.add(node3, 1);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node1.next).toBe(node3);
    expect(linkedList.length).toBe(3);

    const node4: INode<number> = new Node({ value: 4, next: null });
    linkedList.add(node4, 2);
    expect(linkedList.head).toBe(node1);
    expect(linkedList.tail).toBe(node2);
    expect(node3.next).toBe(node4);
    expect(linkedList.length).toBe(4);
  });

  it('should find a node by value', () => {
    const linkedList: ILinkedList <number> = new SinglyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null });
    const node2: INode<number> = new Node({ value: 2, next: null });
    const node3: INode<number> = new Node({ value: 3, next: null });

    linkedList.addFirst(node3);
    linkedList.addFirst(node2);
    linkedList.addFirst(node1);
    expect(linkedList.length).toBe(3);
    expect(linkedList.find(1)).toEqual(new Node({ value: 1, next: node2 }));
    expect(linkedList.find(2)).toEqual(new Node({ value: 2, next: node3 }));
    expect(linkedList.find(3)).toEqual(node3);
    expect(linkedList.find(4)).toBeUndefined();
  });

  it('should reset to defaults', () => {
    const linkedList: ILinkedList <number> = new SinglyLinkedList();
    const node1: INode<number> = new Node({ value: 1, next: null });
    const node2: INode<number> = new Node({ value: 2, next: null });

    linkedList.addFirst(node1);
    linkedList.addFirst(node2);
    linkedList.reset();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);
  });
});