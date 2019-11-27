import { IItem, IQueue } from './@types';
import { IError } from '../../@types';

class Queue <T> implements IQueue <T> {
  length: number = 0;

  _store: IItem <T> [] = [];

  enqueue (item: IItem <T>) : void {
    this._store.push(item);
    this.length = this.length + 1;
  }

  peek () : IItem <T> | undefined {
    if (this._store.length === 0) {
      return undefined;
    }

    return this._store[this._store.length - 1];
  }

  dequeue () : IItem <T> | undefined {

    const item = this._store.shift();

    if (item) {
      this.length = this.length - 1;
    }

    return item;
  }

  clear () : void {
    this._store = [];
  }

  enumerable () : IItem <T> [] {
    return this._store;
  }
}

export default Queue;
