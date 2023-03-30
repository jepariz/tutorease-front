import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [formType, setFormType] = useState("");
  const [username, setUsername] = useState("");

  return (
    <AuthContext.Provider
      value={{
        formType,
        setFormType,
        username,
        setUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
