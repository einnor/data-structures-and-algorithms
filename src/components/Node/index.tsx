import React from 'react';

import NodeChain from '../NodeChain';
import { INode } from '../../lib/LinkedList/@types';
import longArrowRight from '../../assets/images/arrow-long-right.png';

import './style.scss';

type Props = {
  node: INode <number>;
  foundIndex: number | undefined;
  index: number;
};

const Node = ({ node, foundIndex, index }: Props) => {
  return (
    <>
      <div className={`node ${foundIndex === index ? 'selected-higlight' : ''}`}>
        <div className="value">{ node.value }</div>
        <div className="next">
          <span></span>
        </div>
      </div>
      {
        node.next ? (
          <>
            <img className="link" src={longArrowRight} alt="Long arrow right" />
            <NodeChain node={node.next} index={index + 1} foundIndex={foundIndex} />
          </>
        ) : null
      }
    </>
  );
};

export default Node;
