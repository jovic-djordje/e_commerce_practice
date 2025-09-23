import { SectionOneImg } from "../../../assets/images";
import "../home.style.css";

const SectionFour = () => {
  const secFourCart = [
    {
      image: <SectionOneImg className="sec-four-img" />,
      title: "simple",
      text: "Security Device with Monthly Service",
      price: "$19",
    },
    {
      image: <SectionOneImg className="sec-four-img" />,
      title: "standard",
      text: "Security Device with Monthly Service",
      price: "$29",
    },
    {
      image: <SectionOneImg className="sec-four-img" />,
      title: "Best offer",
      text: "Security Device with Monthly Service",
      price: "$39",
    },
  ];
  return (
    <div className="section-four">
      <div className="section-four-holder section-holder">
        <h2 className="sec-four-tt">our packages</h2>
        <div className="sec-four-cart-holder">
          {secFourCart.map((cart) => (
            <div className="sec-four-cart">
              <div className="sec-four-cart-width">
                {cart.image}
                <h3 className="sec-four-cart-tt">{cart.title}</h3>
                <p className="sec-four-cart-txt">{cart.text}</p>
                <span className="sec-four-cart-price">{cart.price}</span>
                <button className="sec-four-cart-btn">Shop now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
