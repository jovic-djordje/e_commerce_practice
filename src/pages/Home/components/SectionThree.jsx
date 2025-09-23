import { SectionThreeImg } from "../../../assets/images";
import "../home.style.css";

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="section-holder section-three-holder">
        <div className="sec-three-cart">
          <div className="sec-three-cart-left">
            <div className="sec-three-cart-width">
              <h3 className="sec-three-cart-tt">
                showcase apps, innovative tech or businesses.
              </h3>
              <p className="sec-three-cart-txt">
                Never be without the product you need! Sign up today to save
                money and time.Cancel anytime.
              </p>
              <button className="section-one-btn">order now</button>
            </div>
          </div>
          <div className="sec-three-cart-right">
            <SectionThreeImg className="sec-three-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
