import { signInWithGooglePopup } from "../../utils/firebase";

const GoogleSignIn = ({ onSignInHandler }) => {

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    onSignInHandler(user)
  }
  return (
    <div>
      <h2>Sign in with a Google account</h2>
      <button onClick={signInGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default GoogleSignIn;