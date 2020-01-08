import Sort from '../Sort';

class SelectionSort extends Sort {
  sort () : number [] {
    const list = this.list;
    let swaps = 0;
    let comparisons = 0;
    const length = this.list.length;

    for (let i = 0; i < length; i++) {
      let indexOfSmallestElement = i;
      for (let j = i + 1; j < length; j++) {
        if (list[indexOfSmallestElement] > list[j]) {
          indexOfSmallestElement = j;
        }
        comparisons += 1;
      }
      if (indexOfSmallestElement !== i) {
        let temp = list[i];
        list[i] = list[indexOfSmallestElement];
        list[indexOfSmallestElement] = temp;
        swaps += 1;
      }
    }

    this.swaps = swaps;
    this.comparisons = comparisons;

    return list;
  };
}

export default SelectionSort;