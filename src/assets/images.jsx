import sectionOneImg from "./headphonesBlack.png";
import sectionOneLogo from "./section-one-logo.png";
import sectionOneLogo2 from "./section-one-logo (2).png";
import sectionOneLogo3 from "./section-one-logo (3).png";
import sectionOneLogo4 from "./section-one-logo (4).png";
import sectionOneLogo5 from "./section-one-logo (5).png";
import sectionOneLogo6 from "./section-one-logo (6).png";
import sectionThreeImg from "./headphonesWhite.png";
import sectionSixClient from "./client.png";
import sectionSixClientTwo from "./client (2).png";
import sectionSixClientThree from "./client (3).png";

const SectionOneImg = ({ className }) => {
  return <img src={sectionOneImg} alt="illustration" className={className} />;
};

const SectionOneLogo = ({ className }) => {
  return <img src={sectionOneLogo} alt="illustration" className={className} />;
};

const SectionOneLogo2 = ({ className }) => {
  return <img src={sectionOneLogo2} alt="illustration" className={className} />;
};

const SectionOneLogo3 = ({ className }) => {
  return <img src={sectionOneLogo3} alt="illustration" className={className} />;
};

const SectionOneLogo4 = ({ className }) => {
  return <img src={sectionOneLogo4} alt="illustration" className={className} />;
};

const SectionOneLogo5 = ({ className }) => {
  return <img src={sectionOneLogo5} alt="illustration" className={className} />;
};

const SectionOneLogo6 = ({ className }) => {
  return <img src={sectionOneLogo6} alt="illustration" className={className} />;
};

const SectionThreeImg = ({ className }) => {
  return <img src={sectionThreeImg} alt="illustration" className={className} />;
};

const SectionSixClient = ({ className }) => {
  return (
    <img src={sectionSixClient} alt="illustration" className={className} />
  );
};

const SectionSixClientTwo = ({ className }) => {
  return (
    <img src={sectionSixClientTwo} alt="illustration" className={className} />
  );
};

const SectionSixClientThree = ({ className }) => {
  return (
    <img src={sectionSixClientThree} alt="illustration" className={className} />
  );
};

export {
  SectionOneImg,
  SectionOneLogo,
  SectionOneLogo2,
  SectionOneLogo3,
  SectionOneLogo4,
  SectionOneLogo5,
  SectionOneLogo6,
  SectionThreeImg,
  SectionSixClient,
  SectionSixClientTwo,
  SectionSixClientThree,
};
