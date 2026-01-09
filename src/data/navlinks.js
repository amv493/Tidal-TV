import { FiUser } from 'react-icons/fi';
import { VscSearch } from 'react-icons/vsc';
import { BsBag } from 'react-icons/bs';

export const navLinks = [
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Browse Shows',
        path:'*'
    },
    {
        name:'Channels',
        path:'*'
    },
    {
        name:'My Channels',
        path:'*'
    },
  ];

  export const navIcons = {
    managements: [
      {
          id: 1,
          icon: VscSearch,  
          link: '*'
      },
      {
          id: 2,
          icon: FiUser,      
          link: '*'
      },
    ]
      
  };