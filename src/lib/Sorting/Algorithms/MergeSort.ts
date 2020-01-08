import Sort from '../Sort';

class MergeSort extends Sort {
  merge (left: number[], right: number[]) {
    const result = [];
    let leftLen = left.length;
    let rightLen = right.length;
    let leftCursor = 0;
    let rightCursor = 0;
    while (leftCursor < leftLen && rightCursor < rightLen) {
      if (left[leftCursor] < right[rightCursor]) {
        result.push(left[leftCursor]);
        leftCursor += 1;
        this.swaps += 1;
      } else {
        result.push(right[rightCursor]);
        rightCursor += 1;
      }
      this.comparisons += 1;
    }
    return result.concat(left.slice(leftCursor)).concat(right.slice(rightCursor));
  }

  sort () : number [] {
    const list = this.list;
    return this.mergeSort(list);
  };

  mergeSort (list: number[]) : number [] {
    if (list.length < 2) {
      return list;
    }
    const length = list.length;
    const mid = Math.floor(length / 2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }
}

export default MergeSort;