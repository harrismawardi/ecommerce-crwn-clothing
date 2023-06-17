import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import './cart-icon.scss';
import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";

const CartIcon = () => {

  const { cart, setCart} = useContext(CartContext);
  const { isOpen, items } = cart;

  const handleClick = () => {
    setCart({isOpen: !isOpen, items: items})
  }

  const getTotalItems = () => {
    let count = 0;
    cart.items.forEach(x => {
      count += x.quantity;
    })
    return count;
  }

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{getTotalItems()}</span>
    </div>
  )
}

export default CartIcon;