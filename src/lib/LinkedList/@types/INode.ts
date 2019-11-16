type INode <T> = {
  value: T;
  next: INode <T> | null;
  previous?: INode <T> | null
};
