import Sort from '../Sort';

class InsertionSort extends Sort {
  sort () : number [] {
    const list = this.list;
    let swaps = 0;
    let comparisons = 0;
    const length = this.list.length;

    for (let i = 1; i < length; i++) {
      let key = list[i];
      let j = i - 1;
      while (j >= 0 && list[j] > key) {
        list[j + 1] = list[j];
        j = j - 1;
        swaps += 1;
      }
      list[j + 1] = key;
      comparisons += 1;
    }

    this.swaps = swaps;
    this.comparisons = comparisons;

    return list;
  };
}

export default InsertionSort;