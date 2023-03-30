import { useContext} from "react";
import AuthContext from "../../contexts/AuthContext";
import { auth} from "../../configs/firebase";
 
function Dashboard() {
  
  const { username } = useContext(AuthContext);
  
  const googleUsername = auth?.currentUser?.displayName


  return (
    <div>Olá, {username ? username : googleUsername}</div>
  )
}

export default Dashboard