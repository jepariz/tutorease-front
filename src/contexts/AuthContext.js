import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarChange, setAvatarChange] = useState(false);
  const [students, setStudents] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        login,
        setLogin,
        username,
        setUsername,
        avatarChange,
        setAvatarChange,
        students,
        setStudents,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
