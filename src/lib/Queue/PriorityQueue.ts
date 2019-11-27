import { IItem, IQueue } from './@types';
import Queue from './Queue';

class PriorityQueue <T> extends Queue <T> {
  enqueue (item: IItem <T>) : void {
    if (this.length === 0) {
      this._store.push(item);
      this.length = this.length + 1;
      return;
    }

    if (this._store[this.length - 1].priority >= item.priority) {
      this._store.push(item);
      this.length = this.length + 1;
      return;
    }

    for (let index = 0; index < this.length; index++) {
      if (item.priority > this._store[index].priority) {
        this._store.splice(index, 0, item);
        this.length = this.length + 1;
        return;
      }
    }
  }
}

export default PriorityQueue;
