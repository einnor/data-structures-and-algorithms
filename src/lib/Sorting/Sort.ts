import { ISort } from './@types';

class Sort implements ISort {
  swaps: number = 0;
  comparisons: number = 0;
  list: number [] = [];

  constructor (list: number[] = []) {
    this.list = list;
  }

  set (input: number []) {
    this.list = input;
  }

  sort () : number [] {
    return this.list;
  };

  generateRandomList (size: number) :  number [] {
    this.list = [...Array(size)].map(() => Math.floor(Math.random() * 101));
    return this.list;
  };

  generateOrderedList (size: number) : number [] {
    this.list = [...Array.from(new Array(size), (value, index) => index + 1)];
    return this.list;
  };

  reset () : void {
    this.list = [];
    this.swaps = 0;
    this.comparisons = 0;
  } ;
}

export default Sort;
