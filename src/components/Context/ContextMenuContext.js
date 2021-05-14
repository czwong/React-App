import { useState, useContext, createContext } from 'react';

const ContextMenuContext = createContext(null);

export function useContextMenu() {
  return useContext(ContextMenuContext);
}

export function ContextMenuProvider({ children }) {
  const [xPos, setXPos] = useState('0px');
  const [yPos, setYPos] = useState('0px');
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <ContextMenuContext.Provider
        value={{ xPos, setXPos, yPos, setYPos, visibility, setVisibility }}
      >
        {children}
      </ContextMenuContext.Provider>
    </>
  );
}
