import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.scss'
import {UserContext} from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import {CartContext} from "../../contexts/cart.context";


const Navigation = () => {

  const { currentUser } = useContext(UserContext)
  const { cart } = useContext(CartContext);

  return (
    <Fragment>
      <nav>
        <Link className='logo-container' to='/'><CrwnLogo className='logo'/></Link>
        <ul className='nav-links-container'>
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/shop'>Shop</Link></li>
          {currentUser && <li><Link className='nav-link' to='/sign-out'>Sign Out</Link></li>}
          {!currentUser && <li><Link className='nav-link' to='/sign-in'>Sign In</Link></li>}
          <li><CartIcon /></li>
        </ul>
        {cart.isOpen && <CartDropDown />}
      </nav>
      <Outlet/>
    </Fragment>
  );
}

export default Navigation;