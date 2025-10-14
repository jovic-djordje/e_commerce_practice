import "./Checkout.style.css";
const Checkout = () => {
  return (
    <div className="checkout-section">
      <div className="checkout-section-holder">
        <div className="delivery-address">
          <div className="delivery-address-width">
            <h3 className="delivery-title">Delivery Address </h3>
            <div className="customer-info">
              <input
                type="text"
                name=""
                id="name-input"
                placeholder="First Name"
              />

              <input
                type="text"
                name=""
                id="lastName-input"
                placeholder="Last Name"
              />
            </div>
            <a href="">+Add your company name</a>
            <input
              type="text"
              name=""
              id="street"
              placeholder="Street Address"
            />

            <input
              type="text"
              name=""
              id="floor"
              placeholder="Apt / Suite / Floor (optional)"
            />
            <div className="city-details">
              <input type="text" name="" id="city" placeholder="City" />

              <select id="state" name="state">
                <option value="">Select a state</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
                <option value="Florida">Florida</option>
                <option value="Washington">Washington</option>
              </select>
              <input type="text" id="zip" placeholder="Zip code" />
            </div>
            <div className="check-box">
              <input type="checkbox" id="checkbox" />
              <p>Use as biling address</p>
            </div>
          </div>
        </div>

        <div className="contact-info-input">
          <div className="contact-info-holder">
            <h3 className="contact-info-title">Contact info</h3>
            <div className="customer-contact-details">
              <input type="text" placeholder="Email for Order Tracking" />
              <input type="text" placeholder="Phone for Delivery Contact" />
            </div>
            <p className="contact-text">
              Your privacy is important to us. View our privacy policy here.
              We'll only contact you if there's an issue with your order. We'll
              also look for coupons associated with your email and phone number
            </p>
            <div className="check-box">
              <input type="checkbox" id="checkbox" />
              <p>Get text alerts for your order on your mobile</p>
            </div>
          </div>
        </div>
        <button className="checkout-btn">Proceed to Savings & Payments</button>
      </div>
    </div>
  );
};

export default Checkout;
