import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import './sign-in.scss'

const SignIn = ({signedIn, setSignedIn}) => {

  const navigate = useNavigate();

  useEffect(() => {
    console.log("in sign in: " + signedIn)
    if (signedIn) { navigate("/") }
  }, [signedIn]);

  const handleSignIn = () => {
      setSignedIn(true);
  }

  return (
    <div className="authentication-container">
      <SignInForm onSignInHandler={handleSignIn}/>
      <SignUpForm onSignInHandler={handleSignIn} />
    </div>
  );
}

export default SignIn;