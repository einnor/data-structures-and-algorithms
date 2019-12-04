import React from 'react';
import { INode } from '../../lib/Tree/@types';
import Tree from './Tree';

type Props = {
  node: INode <number> | null;
};


const Node = ({ node }: Props) => {
  return (
    <li>
      {
        node ? (
          <a href="#">{node.value}</a>
        ) : null
      }
      {
        node && (node.left || node.right) ? (
          <ul>
            {
              node.left ? (
                <Tree root={node.left} isRoot={false} />
              ) : null
            }
            {
              node.right ? (
                <Tree root={node.right} isRoot={false} />
              ) : null
            }
          </ul>
        ) : null
      }
    </li>
  );
};

export default Node;
