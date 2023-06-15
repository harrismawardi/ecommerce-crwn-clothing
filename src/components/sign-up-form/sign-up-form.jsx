import { useState} from "react";
import { checkUserExists, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase"
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-up-form.scss"

const SignUpForm = ({ onSignInHandler }) => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value }= event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if ( password !== confirmPassword) {
      alert("Passwords do not match.")
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      if (!await checkUserExists(user)) {
        await createUserDocumentFromAuth(user, { displayName });
      }
      onSignInHandler(user)
    } catch(e) {
      if (e.code === "auth/email-already-in-use") {
        alert("An account already exists with this email.")
      } else {
        console.error('Error in user creation', e)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" name="displayName" type="text" required={true} onChange={handleChange} value={displayName} />
        <FormInput label="Email" name="email" type="email" required={true} onChange={handleChange} value={email} />
        <FormInput label="Password" name="password" type="password" required={true} onChange={handleChange} value={password} />
        <FormInput label="Confirm Password" name="confirmPassword" type="password" required={true} onChange={handleChange} value={confirmPassword} />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>

  )
}

export default SignUpForm;