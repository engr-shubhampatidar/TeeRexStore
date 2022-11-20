import { useSelector } from "react-redux";
import { CartCard } from "../component/CartCard";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const total = products.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );

  return (
    <div style={{ padding: "0 25%" }}>
      <p>Shopping Cart</p>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div>
            <CartCard key={index} product={product} />
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
      <hr />

      <p>Total: ${total}</p>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
