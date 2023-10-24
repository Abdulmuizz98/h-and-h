import bangles from "../../assets/bangles.png";
import ringOne from "../../assets/ring_1.png";
import earringsOne from "../../assets/earrings_1.png";
import fullSet from "../../assets/full_set.png";
import model from "../../assets/model.png";

import ProductCardGroup from "../ProductCardGroup";
import Button from "../Button";

const cardDataOne = [
  {
    classes: "justify-content-xxl-start mb-5",
    src: ringOne,
    title: "Ring",
  },
  {
    classes: "justify-content-xxl-start align-items-xxl-end",
    src: bangles,
    title: "Bracelet",
  },
];

const cardDataTwo = [
  {
    classes: "justify-content-xxl-end mb-5",
    src: earringsOne,
    title: "Earrings",
  },
  {
    classes: "justify-content-xxl-end align-items-xxl-end",
    src: fullSet,
    title: "Necklace",
  },
];

const Category = () => {
  return (
    <section id="category">
      <div className="container">
        <h2 className="mt-50 mt-md-100 mb-5 ff-serif fw-bold fs-sm-5 fs-md-5 fs-xl-6 text-center">
          Category
        </h2>
        <div className="row g-5 h-xxl-776">
          <div className="col-xxl">
            <ProductCardGroup cardData={cardDataOne} />
          </div>
          <div className="col-xxl d-flex justify-content-center justify-content-xxl-center">
            <figure className="w-182 h-281 w-md-270 h-md-400 w-xxl-520 h-xxl-762 bord-l custom-brad-1">
              <img
                className="w-100 h-100 custom-brad-1"
                src={model}
                alt="girl wearing a necklace"
              ></img>
            </figure>
          </div>
          <div className="col-xxl">
            <ProductCardGroup cardData={cardDataTwo} />
          </div>
        </div>
        <div className="text-center mt-50 mt-md-100 w-100">
          <p className="p-4 p-lg-5 m-0 fw-300 fs-sm-3 fs-md-2 fs-xl-3">
            “Fine jewelry is worth more than an accessory, it’s an expression of
            the extraordinary in life.”
          </p>
          <Button value="Discover now" classes="fs-sm-1 fs-md-1 fs-xl-2" />
        </div>
      </div>
    </section>
  );
};

export default Category;
