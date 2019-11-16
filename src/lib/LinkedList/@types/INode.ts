type INode <T> = {
  value: T | null;
  next: INode <T> | null;
  previous?: INode <T> | null
};

export default INode;
