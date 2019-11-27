import { IItem } from './@types';
import { IError } from '../../@types';

class Queue <T> {
  _length: number = 0;

  _store: IItem <T> [] = [];

  _head: number = -1;

  _tail: number = -1;

}

export default Queue;
