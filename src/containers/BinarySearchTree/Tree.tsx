import React from 'react';
import { INode } from '../../lib/Tree/@types';
import Node from './Node';

type Props = {
  root: INode <number> | null;
  isRoot: boolean;
};

const Tree = ({ root, isRoot }: Props) => {
  if (!isRoot) {
    return (<Node node={root} />);
  }
  return (
    <ul>
      <Node node={root} />
    </ul>
  );
};

export default Tree;
