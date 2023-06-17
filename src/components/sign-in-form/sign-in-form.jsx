import {signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase";
import {useState} from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import './sign-in-form.scss'

const SignInForm = () => {

  const defaultFormFields = {
    email: "",
    password: ""
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
    } catch(e) {
      switch (e.code) {
        case "auth/wrong-password":
          alert("Incorrect credentials.");
          break;
        case "auth/user-not-found":
          alert("No account exists for this email.");
          break;
        default:
          console.error('Error in user sign-in', e)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value }= event.target;
    setFormFields({...formFields, [name]: value});
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch(e) {
      console.error('Error in google sign-in', e)
    }
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" name="email" type="email" required={true} onChange={handleChange} value={email} />
        <FormInput label="Password" name="password" type="password" required={true} onChange={handleChange} value={password} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;