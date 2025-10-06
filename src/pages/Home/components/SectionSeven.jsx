import { SectionOneImg } from "../../../assets/images";

const SectionSeven = () => {
  return (
    <div className="section-seven">
      <div className="section-holder section-one-holder section-seven-holder">
        <div className="section-seven-width-holder">
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
      </div>
      <span className="section-seven-copy">
        Copyright © domainname.com. All Rights Reserved{" "}
      </span>
    </div>
  );
};

export default SectionSeven;
