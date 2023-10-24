import ProductCard from "./ProductCard";

const ProductCardGroup = ({ cardData }) => {
  return (
    <div className="row g-5 h-100 m-0 h-684 justify-content-between">
      {" "}
      {cardData.length &&
        cardData.map((item, index) => (
          <div
            key={index}
            className={`d-flex m-0 justify-content-center ${item.classes}`}
          >
            <ProductCard src={item.src} title={item.title} />
          </div>
        ))}
    </div>
  );
};

export default ProductCardGroup;
