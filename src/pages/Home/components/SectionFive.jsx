import "../home.style.css";
import { FaCheck } from "react-icons/fa6";

const SectionFive = () => {
  const checkLeft = [
    {
      id: 1,
      text: "It uses a dictionary of over Latin words as necessary",
    },
    { id: 2, text: "Combined with handful of model sentence structure lorem" },
    { id: 3, text: "Lorem Ipsum which looks reasonable and handful" },
  ];

  const checkRight = [
    { id: 1, text: "It uses a dictionary of over Latin words as necessary" },
    { id: 2, text: "Combined with handful of model sentence structure lorem" },
    { id: 3, text: "Lorem Ipsum which looks reasonable a handful" },
  ];

  return (
    <div className="section-five">
      <div className="section-five-holder section-holder">
        <div className="product-info-holder">
          <h3 className="product-info-title">Product Information</h3>
          <div className="product-info-mail-holder">
            <input type="text" placeholder="Enter Your Email Here" />
            <button>get product information</button>
          </div>
        </div>
        <div className="feature-holder">
          <h3 className="feat-title">Feature your best sellers.</h3>
          <p className="feat-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            temporibus eveniet tenetur animi doloremque fuga vero, iure beatae
            voluptate et veniam architecto iusto aut distinctio? Nesciunt
            dignissimos nam iure magni.
          </p>
          <div className="checklist-holder">
            <div className="check-left">
              {checkLeft.map((list) => (
                <div className="check-text" key={list.id}>
                  <FaCheck /> {list.text}
                </div>
              ))}
            </div>

            <div className="check-left">
              {checkRight.map((list) => (
                <div className="check-text" key={list.id}>
                  <FaCheck /> {list.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
