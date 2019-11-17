import React from 'react';

import NodeChain from './NodeChain';
import { INode } from '../../lib/LinkedList/@types';

type Props = {
  node: INode <number>
};

const Node = ({ node }: Props) => {
  return (
    <div>
      { node.value }
      {
        node.next ? (
          <NodeChain node={node.next} />
        ) : null
      }
    </div>
  );
};

export default Node;
