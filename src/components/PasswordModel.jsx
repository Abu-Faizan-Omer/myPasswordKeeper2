import { useState, useContext } from "react";
import { PasswordContextapi } from "./PasswordContext";

const PasswordModel = () => {
  const { setIsModalOpen, addPassword } = useContext(PasswordContextapi);

  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || password.trim() === "") {
      alert("Please enter both title and password");
      return;
    }
    addPassword(title, password);
    setTitle("");
    setPassword("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: 
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password: 
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default PasswordModel;
