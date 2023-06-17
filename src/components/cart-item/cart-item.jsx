const CartItem = ({item}) => {
  const {name, quantity} = item;
  return (
    <div className="card-item-container">
      <span>{name}</span>
      <span>{quantity}</span>
    </div>
  )
}

export default CartItem;