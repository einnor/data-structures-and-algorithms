import { IItem } from './@types';
import { IError } from '../../@types';

class Queue <T> {
  _store: IItem <T> [] = [];

  enqueue (item: IItem <T>) : void {
    this._store.push(item);
  }
}

export default Queue;
