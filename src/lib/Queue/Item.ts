import { IItem } from './@types';

class Item <T> {
  value: T | null;
  priority: number | undefined;

  constructor ({ value, priority }: IItem <T>) {
    this.value = value;
    this.priority = priority;
  }
}

export default Item;