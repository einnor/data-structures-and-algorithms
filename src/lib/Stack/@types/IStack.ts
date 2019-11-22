import IItem from './IItem';
import { IError } from '../../../@types';

type IStack <T> = {
  length: number;
  push: (item: IItem <T>) => void | IError;
  peek: () => IItem<T> | undefined;
  pop: () => IItem<T> | IError;
  clear: () => void;
};

export default IStack;
