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
  const isDouble = node.previous !== undefined;

  return (
    <>
      <div className={`node ${foundIndex === index ? 'selected-higlight' : ''} ${isDouble ? 'node--big-node' : ''}`}>
        {
          isDouble ? (
            <div className="previous">
              <span></span>
            </div>
          ) : null
        }
        <div className="value">{ node.value }</div>
        <div className="next">
          <span></span>
        </div>
      </div>
      {
        node.next ? (
          <>
            <div className="links">
              <img className="link" src={longArrowRight} alt="Long arrow right" />
              {
                isDouble ? (
                  <img className="link rotate180" src={longArrowRight} alt="Long arrow left" />
                ) : null
              }
            </div>
            <NodeChain node={node.next} index={index + 1} foundIndex={foundIndex} />
          </>
        ) : null
      }
    </>
  );
};

export default Node;
