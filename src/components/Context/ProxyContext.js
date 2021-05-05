import { useState, useContext, createContext } from 'react';

const ProxyContext = createContext(null);

export function useProxyList() {
  return useContext(ProxyContext);
}

export function ProxyContextProvider({ children }) {
  const [ProxyList, setProxyList] = useState([]);

  return (
    <>
      <ProxyContext.Provider value={{ ProxyList, setProxyList }}>
        {children}
      </ProxyContext.Provider>
    </>
  );
}
