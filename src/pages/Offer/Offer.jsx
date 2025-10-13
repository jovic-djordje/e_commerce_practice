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

const Offer = () => {
  const headphones = [
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgOne className="offer-img" />,
      text: "Item 1",
      price: "$122.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgTwo className="offer-img" />,
      text: "Item 2",
      price: "$123.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgThree className="offer-img" />,
      text: "Item 3",
      price: "$124.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgFour className="offer-img" />,
      text: "Item 4",
      price: "$125.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgFive className="offer-img" />,
      text: "Item 5",
      price: "$126.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgSix className="offer-img" />,
      text: "Item 6",
      price: "$127.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgSeven className="offer-img" />,
      text: "Item 7",
      price: "$128.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgEight className="offer-img" />,
      text: "Item 8",
      price: "$129.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgNine className="offer-img" />,
      text: "Item 9",
      price: "$130.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgTen className="offer-img" />,
      text: "Item 10",
      price: "$131.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgEleven className="offer-img" />,
      text: "Item 11",
      price: "$132.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgTwelve className="offer-img" />,
      text: "Item 12",
      price: "$133.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgThirteen className="offer-img" />,
      text: "Item 13",
      price: "$134.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgFourteen className="offer-img" />,
      text: "Item 14",
      price: "$135.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgFifteen className="offer-img" />,
      text: "Item 15",
      price: "$136.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgSixteen className="offer-img" />,
      text: "Item 16",
      price: "$137.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgSeventeen className="offer-img" />,
      text: "Item 17",
      price: "$138.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgEighteen className="offer-img" />,
      text: "Item 18",
      price: "$139.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgNineteen className="offer-img" />,
      text: "Item 19",
      price: "$140.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgTwenty className="offer-img" />,
      text: "Item 20",
      price: "$141.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgTwentyOne className="offer-img" />,
      text: "Item 21",
      price: "$142.00",
      description: "Simple design high quality sound",
    },
    {
      icon: <FaRegHeart className="headphones-cart-icon" />,
      image: <OfferImgTwentyTwo className="offer-img" />,
      text: "Item 22",
      price: "$143.00",
      description: "Simple design high quality sound",
    },
  ];
  return (
    <div className="offer-section">
      <div className="offer-section-holder">
        {headphones.map((headphone) => (
          <div className="offer-cart">
            <div className="offer-cart-width">
              <div className="headphones-icon-holder"> {headphone.icon}</div>
              {headphone.image}
              <div className="details-holder">
                <p className="offer-cart-title">{headphone.text}</p>
                <span className="offer-cart-price">{headphone.price}</span>
              </div>
              <p className="offer-cart-des">{headphone.description}</p>
              <button className="offer-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offer;
