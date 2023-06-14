import {logUserOut} from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const SignOut = ({ setSignedIn }) => {

  const navigate = useNavigate();

  const onSignOutHandler = () => {
    logUserOut();
    setSignedIn(false);
    navigate("/");
  }

  return <button onClick={onSignOutHandler}>Sign Out</button>
}

export default SignOut;