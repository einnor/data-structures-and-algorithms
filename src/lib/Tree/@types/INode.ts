type INode <T> = {
  value: T | null;
  left?: INode <T> | null;
  right?: INode <T> | null;
};

export default INode;