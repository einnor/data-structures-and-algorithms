import { INode } from './@types';

class Node <T> implements INode <T> {
  value: T | null;

  left: INode <T> | null;

  right: INode <T> | null;

  constructor ({ value }) {
    this.value = value;
  }
};

export default Node;
