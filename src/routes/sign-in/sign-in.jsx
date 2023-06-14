import { createUserDocumentFromAuth, checkUserExists } from '../../utils/firebase'
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import EmailSignIn from "../../components/email-sign-in/email-sign-in";
import GoogleSignIn from "../../components/google-sign-in/google-sign-in";
import {useNavigate} from "react-router-dom";

const SignIn = ({setSignedIn}) => {

  const navigate = useNavigate();

  const onSignInHandler = async (user) => {
    try {
      await authenticateUser(user);
      setSignedIn(true);
      navigate("/");
    } catch (e) {
      console.error('Error in signing in', e.message)
    }
  }

  const authenticateUser = async (user) => {
    if (!await checkUserExists(user)) {
      console.log('user does not exist')
      await createUserDocumentFromAuth(user);
    }
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <EmailSignIn onSignInHandler={onSignInHandler}/>
      <GoogleSignIn onSignInHandler={onSignInHandler}/>
      <SignUpForm onSignUphandler={onSignInHandler} />
    </div>
  );
}

export default SignIn;