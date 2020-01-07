type ISort <T> = {
  swaps: number;
  comparisons: number;
  list: T [];
  sort: () => T [];
  generateRandomList: (size: number) => T [];
  generateOrderedList: (size: number) => T [];
  clear: () => void;
};

export default ISort;