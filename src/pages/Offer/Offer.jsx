import { FaRegHeart } from "react-icons/fa";
import {
  OfferImgEight,
  OfferImgEighteen,
  OfferImgEleven,
  OfferImgFifteen,
  OfferImgFive,
  OfferImgFour,
  OfferImgFourteen,
  OfferImgNine,
  OfferImgNineteen,
  OfferImgOne,
  OfferImgSeven,
  OfferImgSeventeen,
  OfferImgSix,
  OfferImgSixteen,
  OfferImgTen,
  OfferImgThirteen,
  OfferImgThree,
  OfferImgTwelve,
  OfferImgTwenty,
  OfferImgTwentyOne,
  OfferImgTwentyTwo,
  OfferImgTwo,
} from "../../assets/images";
import "./offer.style.css";
import { useEffect, useState } from "react";
import { getAllItems } from "../../components/data/itemsData";
import { useOrderStore } from "../../store/order/order.store";

const Offer = () => {
  const [items, setItems] = useState([]);
  const { addItemToCart } = useOrderStore();
  useEffect(() => {
    // const allItems = getAllItems();
    // console.log(allItems);
    getAllItems().then((result) => {
      setItems(result);
    });
  }, []);
  console.log(items);

  return (
    <div className="offer-section">
      <div className="offer-section-holder">
        {items.map((headphone) => (
          <div className="offer-cart" key={headphone.id}>
            <div className="offer-cart-width">
              <div className="headphones-icon-holder">
                {" "}
                <FaRegHeart className="headphones-cart-icon" />
              </div>
              <img
                src={headphone.image}
                alt="illustration"
                className="offer-img"
              />
              <div className="details-holder">
                <p className="offer-cart-title">{headphone.name}</p>
                <span className="offer-cart-price">${headphone.price}</span>
              </div>
              <p className="offer-cart-des">{headphone.description}</p>
              <button
                className="offer-cart-btn"
                onClick={() => addItemToCart(headphone)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offer;
