type INode <T> = {
  value: T;
  left: INode <T> | null;
  right: INode <T> | null;
};

export default INode;