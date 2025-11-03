import { useContext } from "react";
import { PasswordContextapi } from "./PasswordContext";

const PasswordList = () => {
  const { password } = useContext(PasswordContextapi);

  if (password.length === 0) {
    return <p>No Password There</p>;
  }

  return (
    <div>
      {password.map(item => (
        <div key={item.id} className="passwordList">
          <h4>{item.title}</h4>
          <p>{item.password}</p>
        </div>
      ))}
    </div>
  );
};

export default PasswordList;
