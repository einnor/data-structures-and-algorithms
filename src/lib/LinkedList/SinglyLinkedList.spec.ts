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
});