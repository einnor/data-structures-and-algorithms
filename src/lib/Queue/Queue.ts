import { IItem } from './@types';
import { IError } from '../../@types';

class Queue <T> {
  _store: IItem <T> [] = [];

  enqueue (item: IItem <T>) : void {
    this._store.push(item);
  }

  peek () : IItem <T> | undefined {
    if (this._store.length === 0) {
      return undefined;
    }

    return this._store[this._store.length - 1];
  }

  dequeue () : IItem <T> | undefined {
    const item = this._store.pop();
    return item;
  }

  clear () : void {
    this._store = [];
  }
}

export default Queue;
