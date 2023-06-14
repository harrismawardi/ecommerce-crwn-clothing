import {Link, Outlet } from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {ReactComponent as CrwnLogo } from "../../assets/crown.svg";


import './navigation.scss'

const Navigation = ({ signedIn }) => {

  const [signInOutElement, setSignInOutElement] = useState()

  useEffect(() => {
    console.log('nav rendered')
    if (!signedIn) {
      setSignInOutElement(<Link className='nav-link' to='/sign-in'>Sign In</Link>);
    } else {
      setSignInOutElement(<Link className='nav-link' to='/sign-out'>Sign Out</Link>);
    }
  }, [signedIn])

  return (
    <Fragment>
      <nav>
        <Link className='logo-container' to='/'><CrwnLogo className='logo'/></Link>
        <ul className='nav-links-container'>
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/shop'>Shop</Link></li>
          {signInOutElement}
        </ul>
      </nav>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;