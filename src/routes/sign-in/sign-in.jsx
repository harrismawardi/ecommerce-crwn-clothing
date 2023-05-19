import { signInWithGooglePopup, createUserDocumentFromAuth, checkUserExists} from '../../utils/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    if (!checkUserExists(user)) {
      createUserDocumentFromAuth(user);
    }
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
}

export default SignIn;