import { Products } from "../../Products";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  console.log(totalAmount);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: {totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
