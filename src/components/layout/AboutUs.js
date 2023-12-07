import necklaceTwo from "../../assets/necklace_2.png";
import necklaceOne from "../../assets/necklace_1_mod.png";
import earringsTwo from "../../assets/earrings_2.png";
import ringsEarrings from "../../assets/rings_earrings.png";
import pendantOne from "../../assets/pendant_1.png";

import Car
import Frame from "../Frame"d from "../Card";

const cardData = [
  {
    classes: "justify-content-xxl-start",
    src: pendantOne,
    title: "Unique",
    details:
      "Every design has a story to tell, H&H Jewels spends a lot of time in ensuring that every jewelry from us  makes you stand out from the crowd.",
  },
  {
    classes: "justify-content-xxl-center align-items-xxl-end",
    src: ringsEarrings,
    title: "Quality",
    details:
      "Our jewelries are made of high quality and durable materials that have the ability to retain its shine and luster value for a long time.",
  },
  {
    classes: "justify-content-xxl-end",
    src: earringsTwo,
    title: "Comfort",
    details:
      "H&H Jewels always put the customer first, that is why our designs are carefully selected to be ultra comfortable and light weight.",
  },
];

const AboutUs = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="mt-50 mt-md-100 mb-5 ff-serif fw-bold fs-sm-5 fs-md-5 fs-xl-6 text-center">
          About Us
        </h2>
        <div className="row g-5 ">
          <div className="col-xxl d-flex justify-content-center justify-content-xxl-start">
            <Frame
              img={necklaceTwo}
              classes="w-xl-344 h-xl-476 px-2 py-3 px-md-3 py-md-4 px-xl-17 py-xl-27 bord"
              borderStyle="custom-brad-1"
            />
          </div>
          <div className="col-xxl d-flex justify-content-center align-items-center">
            <div className="custom-col d-flex justify-content-center align-items-end px-5 py-4">
              <p className="fs-sm-2 fs-md-2 fs-xl-2 text-center fw-light lh-1 m-0">
                H&H Jewels is a brand established by Husna, with a craving for
                polished jewelries, she is dedicated to bringing you the perfect
                piece that will bring out the best in every woman’s features and
                personality. The brand is proficient and your ultimate source
                for ordering fine jewelry from the comfort of your home.
              </p>
            </div>
          </div>
          <div className="col-xxl d-flex justify-content-center justify-content-xxl-end">
            <Frame
              img={necklaceOne}
              classes="w-xl-344 h-xl-476 px-2 py-3 px-md-3 py-md-4 px-xl-17 py-xl-27 bord"
              borderStyle="custom-brad-2"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="mt-50 mt-md-100 ff-serif fw-bold fs-sm-5 fs-md-5 fs-xl-6 text-center">
          Why Choose Us
        </h2>
        <div className="row g-5 m-0 h-xxl-684 justify-content-between">
          {cardData.length &&
            cardData.map((item, index) => (
              <div
                key={index}
                className={`col-xxl p-0 d-flex justify-content-center ${item.classes}`}
              >
                <Card
                  src={item.src}
                  title={item.title}
                  details={item.details}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
