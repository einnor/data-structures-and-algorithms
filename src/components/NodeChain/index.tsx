import React from 'react';

import Node from '../Node'
import { INode } from '../../lib/LinkedList/@types';

type Props = {
  node: INode <number>;
  foundIndex: number | undefined;
  index: number;
};

const NodeChain = ({ node, index, foundIndex }: Props) => {
  return (
    <Node node={node} index={index} foundIndex={foundIndex} />
  );
};

export default NodeChain;
