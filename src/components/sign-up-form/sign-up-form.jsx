import { useState} from "react";
import {
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase"

const SignUpForm = ({ onSignUphandler }) => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const [errorMessage, setErrorMessage] = useState()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onChangeHandler = (event) => {
    const { name, value }= event.target;
    setFormFields({...formFields, [name]: value});
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if ( password !== confirmPassword) {
      setErrorMessage(<p>Passwords do not match.</p>);
      return;
    }
    const { user } = await createAuthUserWithEmailAndPassword(email, password)
    onSignUphandler(user)
  }

  return (
    <div>
      <h2>Sign up with your email and password</h2>
      {errorMessage}
      <form onSubmit={onSubmitHandler}>
        <label>Display Name</label>
        <input name="displayName" type="text" required onChange={onChangeHandler} value={displayName} />

        <label>Email</label>
        <input name="email" type="email" required onChange={onChangeHandler} value={email} />

        <label>Password</label>
        <input name="password" type="password" required onChange={onChangeHandler} value={password} />

        <label>Confirm Password</label>
        <input name="confirmPassword" type="password" required onChange={onChangeHandler} value={confirmPassword} />

        <button type="submit">Sign Up</button>
      </form>
    </div>

  )
}

export default SignUpForm;