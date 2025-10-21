import {
  AboutPageImgThree,
  OrderHeroImage,
  OrderProcessFour,
  OrderProcessOne,
  OrderProcessThree,
  OrderProcessTwo,
} from "../../assets/images";
import { Link } from "react-router-dom";
import "./order.style.css";

const Order = () => {
  const orderCarts = [
    {
      id: 1,
      img: <OrderProcessOne className="order-img" />,
      span: "Browse",
      title: "Select your headphones",
      text: "Explore our curated collection of premium audio gear",
    },
    {
      id: 2,

      img: <OrderProcessTwo className="order-img" />,
      span: "Cart",
      title: "Review your selection",
      text: "Verify every detail before checkout",
    },
    {
      id: 3,

      img: <OrderProcessThree className="order-img" />,
      span: "Checkout",
      title: "Secure payment process",
      text: "Fast and encrypted transaction",
    },
    {
      id: 4,

      img: <OrderProcessFour className="order-img" />,
      span: "Delivery",
      title: "Track your headphones",
      text: "Real-time updates from our shipping team",
    },
  ];

  const faqs = [
    {
      id: 1,
      title: "How long does shipping take?",
      text: "Standard shipping takes 3-5 business days. Express options are available for faster delivery.",
    },
    {
      id: 2,
      title: "What payment methods do you accept?",
      text: "We accept all major credit cards, PayPal, and Apple Pay for convenient transactions.",
    },
    {
      id: 3,
      title: "Can I return my headphones?",
      text: "Yes, we offer a 30-day return policy. Headphones must be unused and in original packaging.",
    },
    {
      id: 4,
      title: "Do you offer international shipping?",
      text: "We currently ship to most countries in North America and Europe. Shipping costs vary by location.",
    },
    {
      id: 5,
      title: "How do I track my order?",
      text: "Once shipped, you'll receive a tracking number via email to monitor your package's progress.",
    },
  ];

  return (
    <>
      <div className="order-section offer-section">
        <div className="order-hero-section-holder">
          <div className="order-hero-section">
            <div className="order-hero-section-text-holder">
              <h1>Simple. Fast. Secure.</h1>
              <p>
                Premium headphones delivered with precision. Experience sound
                that cuts through the noise.
              </p>
              <Link to="/offer" className="order-btn-link">
                {" "}
                <button>Shop Now</button>
              </Link>
            </div>
            <OrderHeroImage className="order-hero-img" />
          </div>
        </div>
      </div>

      <div className="order-section offer-section">
        <div className="order-section-holder">
          <div className="order-text-holder">
            {" "}
            <h2>How to get your perfect headphones</h2>
            <p>Discover our streamlined purchasing process</p>
          </div>
          <div className="order-section-carts-holder">
            {orderCarts.map((order) => (
              <div className="order-cart" key={order.id}>
                {order.img}
                <div className="order-cart-text-holder">
                  <h5>{order.span}</h5>
                  <h3 className="order-cart-title">{order.title}</h3>
                  <p className="order-cart-text">{order.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="faq-section offer-section">
        <div className="faq-section-holder">
          <div className="faq-section-text-holder">
            <h2>FAQs</h2>
            <p>Common questions about our headphones and ordering process.</p>
          </div>
          <div className="faqs-holder">
            {faqs.map((faq) => (
              <div className="faq-holder">
                <h3>{faq.title}</h3>
                <p>{faq.text}</p>
              </div>
            ))}
          </div>
          <div className="faq-cta">
            <h2>Need more information?</h2>
            <p>Our support team is ready to answer any additional questions.</p>
            <Link to="/contact" className="order-btn-link">
              {" "}
              <button className="faq-cta-btn order-btn-link">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
