const menuList = [
  {
    id: 'linked-lists',
    text: 'Linked Lists',
    path: '/linked-lists',
    icon: 'link',
    children: [
      {
        text: 'Single',
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
    icon: 'layer-group',
    children: null
  },
  {
    id: 'queues',
    text: 'Queues',
    path: '/queues',
    icon: 'ellipsis-h',
    children: null
  },
  {
    id: 'binary-trees',
    text: 'Binary Trees',
    path: '/binary-trees',
    icon: 'tree',
    children: null
  },
  {
    id: 'hash-tables',
    text: 'Hash Tables',
    path: '/hash-tables',
    icon: 'table',
    children: null
  },
];

export default menuList;
