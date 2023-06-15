import {Link, Outlet, useNavigate} from "react-router-dom";
import {Fragment, useEffect} from "react";
import {ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import './navigation.scss'

const Navigation = ({ signedIn }) => {
  return (
    <Fragment>
      <nav>
        <Link className='logo-container' to='/'><CrwnLogo className='logo'/></Link>
        <ul className='nav-links-container'>
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/shop'>Shop</Link></li>
          {signedIn && <li><Link className='nav-link' to='/sign-out'>Sign Out</Link></li>}
          {!signedIn && <li><Link className='nav-link' to='/sign-in'>Sign In</Link></li>}
        </ul>
      </nav>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;