import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../../contexts/user.context";
import './sign-in.scss'

const SignIn = () => {

  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) { navigate("/") }
  }, [currentUser]);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignIn;