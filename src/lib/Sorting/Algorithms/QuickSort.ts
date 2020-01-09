import Sort from '../Sort';

class QuickSort extends Sort {
  sort () : number [] {
    const list = this.list;
    const leftCursor = 0;
    const rightCursor = list.length - 1;

    return this.quickSort(list, leftCursor, rightCursor);
  }

  quickSort (list: number [], leftCursor: number, rightCursor: number) : number [] {
    let pivot: number;
    let partitionIndex: number;

   if (leftCursor < rightCursor) {
     pivot = rightCursor;
     partitionIndex = this.partition(list, pivot, leftCursor, rightCursor);

    //sort left and right
    this.quickSort(list, leftCursor, partitionIndex - 1);
    this.quickSort(list, partitionIndex + 1, rightCursor);
   }

   return list;
 }

  partition (list: number [], pivot: number, leftCursor: number, rightCursor: number) : number {
    const pivotValue = list[pivot];
    let partitionIndex = leftCursor;

    for (let i = leftCursor; i < rightCursor; i++) {
      if (list[i] < pivotValue) {
        this.swap(list, i, partitionIndex);
        partitionIndex += 1;
      }
    }
    this.swap(list, rightCursor, partitionIndex);

    return partitionIndex;
  }

  swap (list: number [], i: number, j: number) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
}

export default QuickSort;