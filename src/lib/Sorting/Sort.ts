import { ISort } from './@types';

class Sort <T> implements ISort <T> {
  swaps = 0;
  comparisons = 0;
  list = [];

  constructor (list: T[] = []) {
    this.list = list;
  }

  sort: () => T [];
  generateRandomList: (size: number) => T [];
  generateOrderedList: (size: number) => T [];

  clear () : void {
    this.list = [];
  } ;
}
