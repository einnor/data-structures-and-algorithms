import { ISort } from './@types';

class Sort implements ISort {
  swaps = 0;
  comparisons = 0;
  list = [];

  constructor (list: number[] = []) {
    this.list = list;
  }

  sort () : number [] {
    return this.list;
  };

  generateRandomList (size: number) :  number [] {
    return [...Array(size)].map(() => Math.floor(Math.random() * 101));
  };

  generateOrderedList: (size: number) => number [];

  clear () : void {
    this.list = [];
    this.swaps = 0;
    this.comparisons = 0;
  } ;
}

export default Sort;
