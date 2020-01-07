type ISort = {
  swaps: number;
  comparisons: number;
  list: number [];
  sort: () => number [];
  generateRandomList: (size: number) => number [];
  generateOrderedList: (size: number) => number [];
  clear: () => void;
};

export default ISort;