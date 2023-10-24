const Card = ({ src, title, details }) => {
  return (
    <figure
      className={`w-180 p-0 h-260 w-md-270 h-md-400 w-xl-361 h-xl-572 py-2 px-1 px-md-2 py-md-3 px-xl-24 pt-xl-21 bord custom-brad-1`}
    >
      <img
        className="w-100 h-107 h-md-150 h-xl-215 custom-brad-1 bord-light"
        src={src}
        alt="necklace"
      ></img>
      <div className="text-center pt-3 pt-md-4 pt-xl-5">
        <h3 className="fs-sm-4 fs-md-3 fs-xl-5 fw-bold ff-serif">{title}</h3>
        <p className="fs-sm-1 fs-md-1 fs-xl-2 fw-light">{details}</p>
      </div>
    </figure>
  );
};
export default Card;
