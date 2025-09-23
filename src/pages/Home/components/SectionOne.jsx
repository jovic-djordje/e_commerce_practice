import {
  SectionOneImg,
  SectionOneLogo,
  SectionOneLogo2,
  SectionOneLogo3,
  SectionOneLogo4,
  SectionOneLogo5,
  SectionOneLogo6,
} from "../../../assets/images";
import "../home.style.css";

const SectionOne = () => {
  const logoHolder = [
    { id: 1, img: <SectionOneLogo className="section-one-logo" /> },
    { id: 2, img: <SectionOneLogo2 className="section-one-logo" /> },
    { id: 3, img: <SectionOneLogo3 className="section-one-logo" /> },
    { id: 4, img: <SectionOneLogo4 className="section-one-logo" /> },
    { id: 5, img: <SectionOneLogo5 className="section-one-logo" /> },
    { id: 6, img: <SectionOneLogo6 className="section-one-logo" /> },
  ];

  return (
    <div className="section">
      <div className="section-holder section-one-holder">
        <div className="section-one-text-holder">
          <h1 className="section-one-title">Fresh beautiful innovative.</h1>
          <span className="line"></span>
          <p className="section-one-text">
            There are many variations of passages of Lorem Ipsum avaliable,but
            the majority have uffered alteration in some form, by injected
            humour
          </p>
          <button className="section-one-btn">order now</button>
        </div>
        <SectionOneImg className="section-one-img" />
      </div>
      <div className="logo-holder">
        <div className="logo-width-holder">
          {logoHolder.map((logo) => (
            <>{logo.img}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
