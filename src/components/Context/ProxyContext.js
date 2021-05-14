import { useState, useContext, createContext } from 'react';

const ProxyContext = createContext(null);

export function useProxyGroup() {
  return useContext(ProxyContext);
}

export function ProxyContextProvider({ children }) {
  const retrieveProxy = JSON.parse(localStorage.getItem('Proxy'));
  const [ProxyGroup, setProxyGroup] = useState(
    retrieveProxy == null ? [] : retrieveProxy
  );

  return (
    <>
      <ProxyContext.Provider value={{ ProxyGroup, setProxyGroup }}>
        {children}
      </ProxyContext.Provider>
    </>
  );
}
