import { FaUser } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import "../home.style.css";

const SectionTwo = () => {
  const cartInfo = [
    {
      image: <FaUser className="section-two-icon" />,
      title: "Free Updates",
      text: "It users a dictionary of over 200 Latin the words combined with a handful of model sentence with structure.",
    },
    {
      image: <FaHeadphones className="section-two-icon" />,
      title: "Easy to use",
      text: "It users a dictionary of over 200 Latin the words combined with a handful of model sentence with structure.",
    },
    {
      image: <FaMicrophone className="section-two-icon" />,
      title: "Trendy design",
      text: "It users a dictionary of over 200 Latin the words combined with a handful of model sentence with structure.",
    },
  ];
  return (
    <div className="section-two">
      <div className="section-two-holder">
        <div className="section-two-text-holder">
          <h2 className="section-two-title">
            Beautiful presentations made easy.
          </h2>
          <p className="section-two-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere
            veritatis possimus. Temporibus debitis voluptas at nostrum quia,
            vitae cupiditate rerum, exercitationem, suscipit dicta ab dolore
            eius sequi tempora nemo.
          </p>
        </div>
        <div className="section-two-cart-holder">
          {cartInfo.map((carts) => (
            <div className="sec-two-cart">
              {carts.image}
              <h3 className="sec-two-cart-tt">{carts.title}</h3>
              <p className="sec-two-cart-txt">{carts.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
