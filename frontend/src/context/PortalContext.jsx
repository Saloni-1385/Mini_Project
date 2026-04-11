import React, { createContext, useContext, useState } from 'react';

const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
  const [portal, setPortal] = useState('admin'); // 'admin' | 'user'
  const [userRole, setUserRole] = useState('normal'); // 'normal' | 'admin' (Normal User / User Admin)

  const switchPortal = (p) => setPortal(p);
  const switchUserRole = (r) => setUserRole(r);

  return (
    <PortalContext.Provider value={{ portal, switchPortal, userRole, switchUserRole }}>
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => useContext(PortalContext);
