import { logUserOut } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user.context";

const SignOut = () => {

  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (!currentUser) { navigate("/sign-in") }
  }, [currentUser]);

  const handleSignOut = async () => {
    try {
      await logUserOut();
      navigate("/");
    } catch(e) {
      console.error("Issue in logging user out.")
    }
  }

  return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOut;