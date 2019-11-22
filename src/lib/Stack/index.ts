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
}

export default Stack;
