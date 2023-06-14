import {signInAuthUserWithEmailAndPassword} from "../../utils/firebase";
import {useState} from "react";

const EmailSignIn = ({ onSignInHandler }) => {

  const defaultFormFields = {
    email: "",
    password: ""
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { user } = await signInAuthUserWithEmailAndPassword(email, password)
    onSignInHandler(user)
  }

  const onChangeHandler = (event) => {
    const { name, value }= event.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div>
      <h2>Sign in with email</h2>
      <form onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input name="email" type="email" required onChange={onChangeHandler}/>

        <label>Password</label>
        <input name="password" type="password" required onChange={onChangeHandler}/>

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default EmailSignIn;