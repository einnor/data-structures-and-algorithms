type ISort = {
  swaps: number;
  comparisons: number;
  list: number [];
  set: (input: number []) => void;
  sort: () => number [];
  generateRandomList: (size: number) => number [];
  generateOrderedList: (size: number) => number [];
  reset: () => void;
};

export default ISort;