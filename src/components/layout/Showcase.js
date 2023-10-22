import Button from "../Button";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="position-relative h-vw h-xl-995">
          <div className="text-center position-center w-100">
            <p className="ff-serif fw-bold fs-sm-6 fs-md-5 fs-xl-7">
              Glitter With Confidence <br /> And Beauty
            </p>
            <p className="p-4 p-lg-5 fw-300 fs-sm-3 fs-md-2 fs-xl-3">
              Discover the right jewelry piece from our <br /> collections to
              enhance your every look.
            </p>
            <Button value="Discover now" classes="fs-sm-1 fs-md-1 fs-xl-2" />
          </div>
          <div className="bgd-hero position-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
