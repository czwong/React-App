import React from 'react';
import { ContextMenuData } from './ContextMenuData';
import { useContextMenu } from '../Context/ContextMenuContext';
import './ContextMenu.css';

function Contextmenu() {
  const { xPos, yPos, visibility } = useContextMenu();

  return (
    <>
      <div
        className='context-menu'
        style={{
          top: yPos,
          left: xPos,
          visibility: visibility ? 'visible' : 'hidden',
        }}
      >
        {ContextMenuData.map((data, index) => {
          return (
            <div
              key={index}
              className='context-menu-list'
              onClick={data.onclick}
            >
              <span>{data.icon}</span>
              <span>{data.text}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Contextmenu;
