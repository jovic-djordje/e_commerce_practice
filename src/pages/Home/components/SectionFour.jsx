import { useEffect, useState } from "react";
import { SectionOneImg } from "../../../assets/images";
import "../home.style.css";
import { getAllItems } from "../../../components/data/itemsData";

const SectionFour = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems().then((result) => {
      setItems(result.slice(0, 3));
    });
  }, []);

  return (
    <div className="section-four">
      <div className="section-four-holder section-holder">
        <h2 className="sec-four-tt">our packages</h2>
        <div className="sec-four-cart-holder">
          {items.map((cart) => (
            <div className="sec-four-cart" key={cart.id}>
              <div className="sec-four-cart-width">
                <img
                  src={cart.image}
                  alt="illustration"
                  className="sec-four-img"
                />
                <h3 className="sec-four-cart-tt">{cart.name}</h3>
                <p className="sec-four-cart-txt">{cart.description}</p>
                <span className="sec-four-cart-price">${cart.price}</span>
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
