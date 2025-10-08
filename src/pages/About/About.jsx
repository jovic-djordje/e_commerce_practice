import {
  AboutPageImg,
  AboutPageImgThree,
  AboutPageImgTwo,
} from "../../assets/images";
import "./about.style.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-section-holder section-holder">
          <div className="about-section-text-holder">
            <h1 className="about-section-title">About us</h1>
            <p className="about-section-text">
              HubSpot's company and culture are a lot like our product. They're
              crafted, not cobbled, for a delightful experience.
            </p>
          </div>
          <AboutPageImg className="about-page-img" />
        </div>
      </div>

      <div className="our-mission about-section">
        <div className="our-mission-holder section-holder about-section-holder">
          <AboutPageImgTwo className="about-page-img" />
          <div className="our-mission-text-hiolder">
            <h2 className="our-mission-title">
              Our Mission: Helping Millions of Organizations Grow Better
            </h2>
            <p className="our-mission-text">
              We believe not just in growing bigger, but in growing better. And
              growing better means aligning the success of your own business
              with the success of your customers. Win-win!
            </p>
          </div>
        </div>
      </div>

      <div className="about-section our-story">
        <div className="our-story-holder section-holder about-section-holder">
          <div className="our-story-text-holder">
            <h2 className="our-story-title">Our Story</h2>
            <p className="our-story-text">
              In 2004, fellow MIT graduate students Brian Halligan and Dharmesh
              Shah noticed a major shift in the way people shop and purchase
              products. Buyers didn't want to be interrupted by ads, they wanted
              helpful information. In 2006, they founded HubSpot to help
              companies use that shift to grow better with inbound marketing.
              Along the way, HubSpot expanded beyond marketing into a crafted,
              not cobbled suite of products that create the frictionless
              customer experience that buyers expect today. Expertly led by CEO
              Yamini Rangan, HubSpot uses its customer platform built on an
              AI-powered Smart CRM to help millions of scaling organizations
              grow better.
            </p>
          </div>
          <AboutPageImgThree className="about-page-img our-story-img" />
        </div>
      </div>
    </>
  );
};

export default About;
