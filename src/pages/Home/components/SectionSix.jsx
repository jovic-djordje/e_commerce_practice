import {
  SectionSixClient,
  SectionSixClientThree,
  SectionSixClientTwo,
} from "../../../assets/images";

const SectionSix = () => {
  const testimonial = [
    {
      id: 1,
      image: <SectionSixClient className="section-six-img" />,
      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus eveniet tenetur animi doloremque fuga vero, iure beatae voluptate et veniam architecto iusto aut distinctio? Nesciunt dignissimos nam iure magni.",
      name: "John Smith",
    },
    {
      id: 2,
      image: <SectionSixClientTwo className="section-six-img" />,

      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus eveniet tenetur animi doloremque fuga vero, iure beatae voluptate et veniam architecto iusto aut distinctio? Nesciunt dignissimos nam iure magni.",
      name: "Steve Hill",
    },
    {
      id: 3,
      image: <SectionSixClientThree className="section-six-img" />,

      text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus eveniet tenetur animi doloremque fuga vero, iure beatae voluptate et veniam architecto iusto aut distinctio? Nesciunt dignissimos nam iure magni.",
      name: "David Jackson",
    },
  ];

  return (
    <div className="section-six">
      <div className="section-six-holder section-holder">
        <div className="section-six-width-holder">
          <h2 className="section-six-title">What our clients say</h2>
          <div className="section-six-cart-holder">
            {testimonial.map((client) => (
              <div className="section-six-cart" key={client.id}>
                {client.image}
                <p className="section-six-cart-text">{client.text}</p>
                <span className="section-six-cart-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
