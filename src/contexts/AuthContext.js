import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
 const [formType, setFormType] = useState("")

  return (
    <AuthContext.Provider
      value={{
        formType,
        setFormType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}