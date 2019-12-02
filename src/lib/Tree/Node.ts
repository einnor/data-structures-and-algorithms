import { INode } from './@types';

class Node <T> implements INode <T> {
  value: T | null;

  left: INode <T> | null = null;

  right: INode <T> | null = null;;

  constructor ({ value }: INode <T>) {
    this.value = value;
  }
};

export default Node;
