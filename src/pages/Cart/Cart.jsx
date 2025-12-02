import { OfferImgOne, OfferImgThree, OfferImgTwo } from "../../assets/images";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.style.css";
import { useEffect, useState } from "react";
import { getAllItems } from "../../components/data/itemsData";
import { useOrderStore } from "../../store/order/order.store";

const COUPONS = [
  { code: "SAVE10", name: "Save 10%", amount: 10 },
  { code: "WELCOME20", name: "Welcome 20%", amount: 20 },
  { code: "BLACKFRIDAY30", name: "Black Friday 30%", amount: 30 },
];

const Cart = () => {
  //onst [items, setItems] = useState([]);
  const [promoInput, setPromoInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isError, setIsError] = useState(false);
  const { orders, removeFromCart, removeAllItems, updateQuantity } =
    useOrderStore();
  console.log(orders, "all orders");

  {
    /*useEffect(() => {
   const allItems = getAllItems();
   console.log(allItems);
    getAllItems().then((result) => {
      setItems(result.slice(0, 3));
   });
   }, []); */
  }

  const handleApplyCoupon = () => {
    const couponCode = promoInput.trim().toLowerCase();
    const foundedCoupon = COUPONS.find(
      (c) => c.code.toLowerCase() === couponCode
    );

    if (!foundedCoupon) {
      setIsError(true);
      setPromoInput("Promocode is not valid ❌");
    }

    setAppliedCoupon(foundedCoupon);
    setErrorMessage("");
  };

  let subTotal = orders.reduce(
    (sum, orderItem) => sum + orderItem.price * orderItem.quantity,
    0
  );
  console.log(subTotal, "sub tital calculation");
  let discount = appliedCoupon ? (subTotal * appliedCoupon.amount) / 100 : 0;
  const total = Math.max(0, subTotal - discount);

  if (!orders || orders.length === 0) {
    return (
      <div className="cart-section empty-cart">
        <div className="cart-holder">
          <h3 className="cart-title">Currently you don't have items in cart</h3>
          <Link to="/offer" className="cart-btn-link">
            <button className="empty-cart-btn">Go to Offer</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-section">
      <div className="cart-holder">
        <div className="cart">
          <div className="cart-title-holder">
            <h3 className="cart-title">Cart</h3>
            <button className="remove-all-btn" onClick={() => removeAllItems()}>
              Clear All
            </button>
          </div>
          <div className="cart-items-holder">
            {orders.map((item) => (
              <div className="item-detail" key={item.id}>
                <img src={item.image} alt="illustration" className="cart-img" />
                <div className="item-text">
                  <span>{item.name}</span>
                  <p>{item.description}</p>
                </div>
                <input
                  type="number"
                  min="1"
                  max="10"
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                ></input>
                <span className="item-price">
                  {" "}
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <RiDeleteBin6Line
                  className="cart-items-icon"
                  onClick={() => removeFromCart(item.id)}
                />
              </div>
            ))}
          </div>
          <div className="promo-code-holder">
            {" "}
            <input
              type="text"
              className="promo-code"
              placeholder={isError ? "promocode" : ""}
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
            />
            <button onClick={() => handleApplyCoupon()}>Apply</button>
          </div>
          {appliedCoupon && <span>{appliedCoupon.name} off</span>}
          <div className="subtotal-holder">
            <div className="subtotal">
              <p>Subtotal</p>
              <span className="subtotal-price">${subTotal.toFixed(2)}</span>
            </div>
            <div className="subtotal">
              <p>Discount</p>
              <span className="subtotal-discount">${discount.toFixed(2)}</span>
            </div>
          </div>
          <div className="total-holder">
            <p>Total</p>
            <span className="total-price">${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="cart-btn-link">
            {" "}
            <button className="cart-btn">Proceed to checkout</button>
          </Link>
          <button className="cart-btn">Continue shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
