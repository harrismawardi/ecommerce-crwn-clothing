import Button from "../button/button";
import './product-card.scss'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const {name, imageUrl, price} = product;

  const {cart, setCart} = useContext(CartContext);
  const {items} = cart;

  const handleClick = () => {
    addProductToCart(cart, product)
  }

  const addProductToCart = (cart, product) => {
    let productExistsAsCartItem = false;
    for (const cartItem of items) {
      if (cartItem.id === product.id) {
        cartItem.quantity++
        productExistsAsCartItem = true;
        break;
        }
    }
    if (!productExistsAsCartItem) {
      items.push({...product, quantity: 1})
    }
    setCart({...cart, items: items})
  }


  return (
    <article className="product-card-container">
      <img alt={name} src={imageUrl}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">£{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleClick}>Shop Here</Button>
    </article>
  )
}

export default ProductCard;
