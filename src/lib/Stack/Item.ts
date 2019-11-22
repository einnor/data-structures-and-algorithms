import { IItem } from './@types';

class Item <T> {
  value: T | null;

  constructor ({ value }: IItem <T>) {
    this.value = value;
  }
}

export default Item;
