import PasswordProvider from "./components/PasswordContext"
import PasswordList from "./components/PasswordList"
import PasswordModel from "./components/PasswordModel"
import { useContext } from "react"
import { PasswordContextapi } from "./components/PasswordContext"

function App() {
  return (
    <PasswordProvider>
      <MainContent />
    </PasswordProvider>
  );
}

function MainContent() {
  const { password, setIsModalOpen, isModalOpen } = useContext(PasswordContextapi);

  return (
    <>
      <h1>Password Manager</h1>
      <h4>Total Password: {password.length}</h4>
      <button onClick={() => setIsModalOpen(true)}>Add Password</button><br /><br />
      Search:<input type="text" placeholder="Search Password" />

      <div>
        <h1>All Password</h1>
        <PasswordList/>
      </div>
      {isModalOpen && <PasswordModel />}
      
    </>
  );
}
export default App;
