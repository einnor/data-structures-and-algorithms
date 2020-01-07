import { faLink, faLayerGroup,faEllipsisH, faTree, faTable, faHome, faSort } from '@fortawesome/free-solid-svg-icons'

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
  {
    id: 'sorting-algorithms',
    text: 'Sorting Algos',
    path: '/sorting-algorithms',
    icon: faSort,
    children: [
      {
        text: 'Bubble Sort',
        path: '/sorting-algorithms/bubble-sort',
      },
      {
        text: 'Insertion Sort',
        path: '/sorting-algorithms/insertion-sort',
      },
      {
        text: 'Selection Sort',
        path: '/sorting-algorithms/selection-sort',
      },
      {
        text: 'Merge Sort',
        path: '/sorting-algorithms/merge-sort',
      },
      {
        text: 'Quick Sort',
        path: '/sorting-algorithms/quick-sort',
      },
    ],
  },
];

export default menuList;
