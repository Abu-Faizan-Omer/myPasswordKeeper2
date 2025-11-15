import PasswordProvider from "./components/PasswordContext";
import { useContext, useState } from "react";
import { PasswordContextapi } from "./components/PasswordContext";
import PasswordList from "./components/PasswordList";
import PasswordModel from "./components/PasswordModel";
import './App.css'

const MainContent = () => {
  const { password, setIsModalOpen, isModalOpen } = useContext(PasswordContextapi);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Password Manager</h1>
      <h4>Total Password: {password.length}</h4>
      <button onClick={() => setIsModalOpen(true)}>Add Password</button>
      <br /><br />
      Search:<input type="text" placeholder="Search Password" 
      value={searchTerm} 
      onChange={e => setSearchTerm(e.target.value)}/>
      <div>
        <h1>All Password</h1>
        <PasswordList searchKey={searchTerm}/>
      </div>
      {isModalOpen && <PasswordModel />}
    </>
  );
};

function App() {
  return (
    <PasswordProvider>
      <MainContent />
    </PasswordProvider>
  );
}

export default App;
