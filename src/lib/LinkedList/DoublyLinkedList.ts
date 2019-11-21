import { INode } from './@types';
import { IError } from '../../@types';

class DoublyLinkedList <T> {
  head: INode <T> | null = null;
  tail: INode <T> | null = null;
  length: number = 0;
}

export default DoublyLinkedList;
