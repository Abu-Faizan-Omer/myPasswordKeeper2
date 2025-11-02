import { useContext } from "react";
import { PasswordContextapi } from "./PasswordContext";

const PasswordModel = () => {
  const { setIsModalOpen } = useContext(PasswordContextapi);

  function handleSubmit(e) {
    e.preventDefault();
    setIsModalOpen(false); 
  }
  function handleCancel() {
    setIsModalOpen(false); // Cancel pe modal band kare
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Title: <input type="text" placeholder="Enter Title" />
        Password: <input type="text" placeholder="Enter Password" />
        <button type="submit">Add</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </>
  );
};
export default PasswordModel;
