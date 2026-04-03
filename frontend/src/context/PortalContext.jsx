import React, { createContext, useContext, useState } from 'react';

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [portal, setPortal] = useState('admin'); // 'admin' | 'user'

  const switchPortal = (p) => setPortal(p);

  return (
    <PortalContext.Provider value={{ portal, switchPortal }}>
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => useContext(PortalContext);
