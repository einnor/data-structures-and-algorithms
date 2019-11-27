import IItem from './IItem';
import { IError } from '../../../@types';

type IQueue <T> = {
  enqueue: (item: IItem <T>) => void;
  peek: () => IItem <T> | undefined;
  dequeue: () => IItem <T> | IError;
  clear: () => void;
  enumerable: () => IItem <T> [];
};

export default IQueue;
