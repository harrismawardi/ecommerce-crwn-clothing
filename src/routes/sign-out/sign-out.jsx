import { logUserOut } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

const SignOut = ({ signedIn, setSignedIn }) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!signedIn) {
      navigate("/sign-in")
    }
  }, [signedIn]);

  const handleSignOut = async () => {
    try {
      await logUserOut();
      setSignedIn(false);
      navigate("/");
    } catch(e) {
      console.error("Issue in logging user out.")
    }

  }

  return <button onClick={handleSignOut}>Sign Out</button>
}

export default SignOut;