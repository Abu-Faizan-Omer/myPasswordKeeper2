import { useContext } from "react";
import { PasswordContextapi } from "./PasswordContext";

const PasswordList = ({ searchKey }) => { // <-- **RECEIVE PROP**
  const { password } = useContext(PasswordContextapi);

  // **FILTER LOGIC ADDED BELOW**
  const filtered = password.filter(item =>
    item.title.toLowerCase().includes(searchKey.toLowerCase()) ||
    item.password.toLowerCase().includes(searchKey.toLowerCase())
  );

  if (filtered.length === 0) {
    return <p>No Password Found</p>;
  }

  return (
    <div>
      {filtered.map(item => (
        <div key={item.id} className="passwordList">
          <h4 style={{color:"red"}}>
            {item.title} ------- <span style={{color:"green"}}>{item.password}</span>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default PasswordList;
