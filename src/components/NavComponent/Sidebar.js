import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [Index, setIndex] = useState(0);

  return (
    <>
      <IconContext.Provider value={{ color: 'rgb(160, 156, 156)' }}>
        <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.cName}
                  id={Index === index ? 'active' : ''}
                  onClick={() => setIndex(index)}
                >
                  <Link to={item.path}>
                    <div id='icon'>{item.icon}</div>
                    <div id='title'>{item.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
