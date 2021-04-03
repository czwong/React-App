import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Proxy',
    path: '/Proxy',
    icon: <ImIcons.ImConnection />,
    cName: 'nav-text',
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <MdIcons.MdSettings />,
    cName: 'nav-text',
  },
];
