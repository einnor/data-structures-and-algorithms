import { IItem } from './@types';
import { IError } from '../../@types';

class Stack <T> {
  length: number = 0;

  _store: IItem <T> [] = [];

  push (item: IItem <T>) : void | IError {
    if (this.length === (2 ** 32) - 1) {
      return { message: 'Max stack' };
    }

    this._store.push(item);
    this.length = this.length + 1;
  }

  peek () : IItem <T> | undefined {
    if (this.length === 0) {
      return undefined;
    }

    return this._store[this.length - 1];
  }

  pop () : IItem <T> | undefined {

    const item = this._store.pop();
    if (item) {
      this.length = this.length - 1;
    }

    return item;
  }

  clear () : void {
    this.length = 0;
    this._store = [];
  }
}

export default Stack;
