import IItem from './IItem';
import { IError } from '../../../@types';

type IStack <T> = {
  length: number;
  push: (item: IItem <T>) => void | IError;
  peek: () => IItem<T> | undefined;
  pop: () => IItem<T> | undefined;
  clear: () => void;
  enumerable: () => IItem <T> [];
};

export default IStack;
