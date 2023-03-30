import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
