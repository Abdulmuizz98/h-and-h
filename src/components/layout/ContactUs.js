import necklaceThree from "../../assets/necklace_3.png";
import necklaceFour from "../../assets/necklace_4.png";
import Form from "../Form";

const ContactUs = () => {
  return (
    <div id="contact">
      <div className="container">
        <h2 className="mt-50 mt-md-100 mb-5 ff-serif fw-bold fs-sm-5 fs-md-4 fs-xl-6 text-center">
          Contact Us
        </h2>
        <figure className="d-xl-none center-x mb-5">
          <img
            className="h-107 h-md-150 px-3 py-2 custom-brad-1 bord mt-3"
            src={necklaceThree}
            alt="girl wearing a necklace"
          ></img>
        </figure>
        <div className="row">
          <div className="col-xl">
            <Form />
          </div>
          <div className="col-xl d-none d-xl-flex justify-content-end">
            <figure className="w-xl-400">
              <div className="w-100 h-xl-250 px-35 py-4 bord custom-brad-3">
                <img
                  className="w-100 h-100 custom-brad-3"
                  src={necklaceThree}
                  alt="girl wearing a necklace"
                ></img>
              </div>
              <img
                className="w-100 h-xl-250 mt-56 custom-brad-4 bord-light"
                src={necklaceFour}
                alt="girl wearing a necklace"
              ></img>
            </figure>
          </div>
        </div>
        <figure className="d-xl-none center-x mt-5">
          <img
            className="h-107 h-md-150 custom-brad-2 bord-light mt-3"
            src={necklaceFour}
            alt="girl wearing a necklace"
          ></img>
        </figure>
      </div>
    </div>
  );
};

export default ContactUs;
