import { useState, createContext } from "react";

const PasswordContextapi = createContext();

const PasswordProvider = ({ children }) => {
  const [password, setPassword] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add new password without overwriting old entries
  const addPassword = (title, pass) => {
    setPassword(prevPasswords => [
      ...prevPasswords,
      { id: Date.now(), title, password: pass }
    ]);
  };

  return (
    <PasswordContextapi.Provider value={{
      password,
      addPassword,
      setIsModalOpen,
      isModalOpen
    }}>
      {children}
    </PasswordContextapi.Provider>
  );
};

export default PasswordProvider;
export { PasswordContextapi };
