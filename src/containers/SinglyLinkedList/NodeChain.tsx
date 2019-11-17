import React from 'react';

import Node from './Node'
import { INode } from '../../lib/LinkedList/@types';

type Props = {
  node: INode <number>
};

const NodeChain = ({ node }: Props) => {
  return (
    <Node node={node} />
  );
};

export default NodeChain;
