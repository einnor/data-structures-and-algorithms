import Sort from '../Sort';

class BubbleSort <T> extends Sort <T> {
  sort () : T [] {
    const list = this.list;
    let swaps = 0;
    let comparisons = 0;
    const length = this.list.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (list[j] > list[j + 1]) {
          let temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
          swaps += 1;
        }
        comparisons += 1;
      }
    }

    this.swaps = swaps;
    this.comparisons = comparisons;

    return list;
  };
}