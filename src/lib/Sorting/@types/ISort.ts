type ISort <T> = {
  swaps: number;
  comparisons: number;
  list: T [];
  sort: () => T [];
  generateRandomList: () => T [];
  generateOrderedList: () => T [];
  clear: () => void;
};

export default ISort;