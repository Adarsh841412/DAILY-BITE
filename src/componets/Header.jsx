import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Headers() {
const navigate=useNavigate();

    const loggedData=useContext(UserContext)
function logout(){
localStorage.removeItem('nurtrify-user')
loggedData.setLoggedUser(null)
navigate("/login")
}




  return (
    <div>
      <ul>
        <li>Home</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
}
