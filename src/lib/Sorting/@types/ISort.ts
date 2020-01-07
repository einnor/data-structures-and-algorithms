type ISort = {
  swaps: number;
  comparisons: number;
  list: number [];
  sort: () => number [];
  generateRandomList: (size: number) => number [];
  generateOrderedList: (size: number) => number [];
  reset: () => void;
};

export default ISort;