import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "./contact.style.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-section-holder">
        <div className="contact-left-side">
          <div className="contact-left-side-text-holder">
            <h1 className="contact-title">Get in touch</h1>
            <p className="contact-text">
              Use our contact form for all information requests or contact us
              directly using the contact information below.
            </p>
            <p className="contact-text">
              Feel free to get in touch with us via email or phone
            </p>
          </div>

          <span className="hr-line"></span>

          <div className="contact-info-holder">
            <div className="contact-info">
              <FaLocationDot className="contact-icons" />
              <div className="contact-info-details">
                <span>Our Office Location</span>
                <p>
                  The Interior Design Studio Company The Courtyard, Al Quoz 1,
                  Colorado, USA
                </p>
              </div>
            </div>
            <div className="contact-info">
              <FaPhoneAlt className="contact-icons" />
              <div className="contact-info-details">
                <span>Phone (Landline)</span>
                <p>+912 3 567 8987</p>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="form-holder">
            <h2 className="form-title">Get startet with free quotation</h2>
            <div className="input-holder">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>

            <div className="input-holder">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="enter a vaild email address" />
            </div>

            <div className="input-holder">
              <label htmlFor="">Message</label>
              <textarea type="text" placeholder="Enter your message" />
            </div>
            <button className="form-btn">Submit your request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
