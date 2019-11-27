import IItem from './IItem';

type IQueue <T> = {
  length: number;
  enqueue: (item: IItem <T>) => void;
  peek: () => IItem <T> | undefined;
  dequeue: () => IItem <T> | undefined;
  clear: () => void;
  enumerable: () => IItem <T> [];
};

export default IQueue;
