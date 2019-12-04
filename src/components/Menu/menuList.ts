import { faLink, faLayerGroup,faEllipsisH, faTree, faTable, faHome } from '@fortawesome/free-solid-svg-icons'

import { IMenuItem } from '../../@types';

const menuList: IMenuItem[] = [
  {
    id: 'home',
    text: 'Home',
    path: '/',
    icon: faHome,
    children: null
  },
  {
    id: 'linked-lists',
    text: 'Linked Lists',
    path: '/linked-lists',
    icon: faLink,
    children: [
      {
        text: 'Singly',
        path: '/linked-lists/singly',
      },
      {
        text: 'Doubly',
        path: '/linked-lists/doubly',
      },
    ],
  },
  {
    id: 'stacks',
    text: 'Stacks',
    path: '/stacks',
    icon: faLayerGroup,
    children: null
  },
  {
    id: 'queues',
    text: 'Queues',
    path: '/queues',
    icon: faEllipsisH,
    children: [
      {
        text: 'Simple',
        path: '/queues/simple',
      },
      {
        text: 'Priority',
        path: '/queues/priority',
      },
    ],
  },
  {
    id: 'binary-search-trees',
    text: 'Binary Search Trees',
    path: '/binary-search-trees',
    icon: faTree,
    children: null
  },
  {
    id: 'hash-tables',
    text: 'Hash Tables',
    path: '/hash-tables',
    icon: faTable,
    children: null
  },
];

export default menuList;
