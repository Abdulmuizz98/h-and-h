const ProductCard = ({ src, title }) => {
  return (
    <figure className="w-100">
      <div className="text-center d-flex align-items-center justify-content-center pt-3 pt-md-4 pt-xl-5 w-100 h-107 h-md-150 bord custom-brad-1">
        <h3 className="fs-sm-4 fs-md-3 fs-xl-5 fw-bold ff-serif">{title}</h3>
      </div>
      <img
        className="w-100 h-107 h-md-150 custom-brad-2 bord-light mt-3"
        src={src}
        alt="girl wearing a necklace"
      ></img>
    </figure>
  );
};

export default ProductCard;
