import bangles from "../../assets/bangles.png";
import ringOne from "../../assets/ring_1.png";
import earringsOne from "../../assets/earrings_1.png";
import fullSet from "../../assets/full_set.png";
import model from "../../assets/model.png";

import ProductCardGroup from "../ProductCardGroup";
import Button from "../Button";
import Frame from "../Frame";

const cardDataOne = [
  {
    classes: "justify-content-xl-start mb-5",
    src: ringOne,
    title: "Ring",
  },
  {
    classes: "justify-content-xl-start align-items-xxl-end",
    src: bangles,
    title: "Bracelet",
  },
];

const cardDataTwo = [
  {
    classes: "justify-content-xl-end mb-5",
    src: earringsOne,
    title: "Earrings",
  },
  {
    classes: "justify-content-xl-end align-items-xxl-end",
    src: fullSet,
    title: "Necklace",
  },
];

const Category = () => {
  return (
    <section id="category">
      <div className="container">
        <h2 className="mt-50 mt-md-100 mb-5 ff-serif fw-bold fs-sm-5 fs-md-4 fs-xl-6 text-center">
          Category
        </h2>
        <div className="row gy-5 h-xl-776">
          <div className="col-xl">
            <ProductCardGroup cardData={cardDataOne} />
          </div>
          <div className="col-xl d-flex justify-content-center justify-content-xl-center">
            <Frame
              img={model}
              classes="w-xl-520 h-xl-762 bord-l"
              borderStyle="custom-brad-1"
            />
          </div>
          <div className="col-xl">
            <ProductCardGroup cardData={cardDataTwo} />
          </div>
        </div>
        <div className="text-center mt-50 mt-md-100 w-100">
          <p className="p-4 p-lgy-5 m-0 fw-300 fs-sm-3 fs-md-2 fs-xl-2">
            “Fine jewelry is worth more than an accessory, it’s an expression of
            the extraordinary in life.”
          </p>
          <Button value="Discover now" classes="fs-sm-1 fs-md-1 fs-xl-1" />
        </div>
      </div>
    </section>
  );
};

export default Category;
