import {Link, Outlet} from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import './navigation.scss'

const Navigation = () => {
  return (
    <Fragment>
      <nav>
        <Link className='logo-container' to='/'><CrwnLogo className='logo'/></Link>
        <ul className='nav-links-container'>
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/shop'>Shop</Link></li>
          <li><Link className='nav-link' to='/sign-in'>Sign In</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;