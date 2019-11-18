import React from 'react';

import NodeChain from './NodeChain';
import { INode } from '../../lib/LinkedList/@types';
import longArrowRight from '../../assets/images/arrow-long-right.png';

type Props = {
  node: INode <number>
};

const Node = ({ node }: Props) => {
  return (
    <>
      <div className="node">
        <div className="value">{ node.value }</div>
        <div className="next">
          <span></span>
        </div>
      </div>
      {
        node.next ? (
          <>
            <img className="link" src={longArrowRight} alt="Long arrow right" />
            <NodeChain node={node.next} />
          </>
        ) : null
      }
    </>
  );
};

export default Node;
