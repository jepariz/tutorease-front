import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");


  return (
    <AuthContext.Provider
      value={{
        login,
        setLogin,
        username,
        setUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
