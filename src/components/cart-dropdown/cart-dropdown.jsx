import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {useNavigate} from "react-router-dom";
import './cart-dropdown.scss'
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

const CartDropDown = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const clickHandle = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      {cart.items.map((item) => <CartItem key={item.id} item={item} />)}
      <Button onClick={clickHandle}>Go to checkout</Button>
    </div>
  )
}

export default CartDropDown;