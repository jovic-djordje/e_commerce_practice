import { OfferImgOne, OfferImgThree, OfferImgTwo } from "../../assets/images";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.style.css";
const Cart = () => {
  const items = [
    {
      icon: <RiDeleteBin6Line className="cart-items-icon" />,

      image: <OfferImgOne className="cart-img" />,
      text: "Item 1",
      price: "$122.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <RiDeleteBin6Line className="cart-items-icon" />,

      image: <OfferImgTwo className="cart-img" />,
      text: "Item 2",
      price: "$123.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <RiDeleteBin6Line className="cart-items-icon" />,
      image: <OfferImgThree className="cart-img" />,
      text: "Item 3",
      price: "$124.00",
      description: "Simple design high quality sound",
    },
  ];
  return (
    <div className="cart-section">
      <div className="cart-holder">
        <div className="cart">
          <h3 className="cart-title">Cart</h3>
          <div className="cart-items-holder">
            {items.map((item) => (
              <div className="item-detail">
                {item.image}
                <div className="item-text">
                  <span>{item.text}</span>
                  <p>{item.description}</p>
                </div>
                <input type="number" min="1" max="10"></input>
                <span className="item-price">{item.price}</span>
                {item.icon}
              </div>
            ))}
          </div>
          <div className="promo-code-holder">
            {" "}
            <input type="text" className="promo-code" placeholder="promocode" />
            <button>Apply</button>
          </div>
          <span>20% off discount</span>
          <div className="subtotal-holder">
            <div className="subtotal">
              <p>Subtotal</p>
              <span className="subtotal-price">$369.00</span>
            </div>
            <div className="subtotal">
              <p>Discount</p>
              <span className="subtotal-discount">$</span>
            </div>
            <div className="subtotal">
              <p>Tax</p>
              <span className="subtotal-tax">$</span>
            </div>
          </div>
          <div className="total-holder">
            <p>Total</p>
            <span className="total-price">$369.00</span>
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
