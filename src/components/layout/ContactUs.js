import necklaceThree from "../../assets/necklace_3.png";
import necklaceFour from "../../assets/necklace_4.png";
import Form from "../Form";

const ContactUs = () => {
  return (
    <div id="contact">
      <div className="container">
        <h2 className="mt-50 mt-md-100 mb-5 ff-serif fw-bold fs-sm-5 fs-md-5 fs-xl-6 text-center">
          Contact Us
        </h2>
        <figure className="d-xxl-none center-x mb-5">
          <img
            className="h-107 h-md-150 px-3 py-2 custom-brad-1 bord mt-3"
            src={necklaceThree}
            alt="girl wearing a necklace"
          ></img>
        </figure>
        <div className="row">
          <div className="col-xxl">
            <Form />
          </div>
          <div className="col-xxl d-none d-xxl-flex justify-content-end">
            <figure className="w-xxl-500">
              <div className="w-100 h-xxl-337 h-md-150 w-xl-344 h-xl-476 px-35 py-4 bord custom-brad-3">
                <img
                  className="w-100 h-100 custom-brad-3"
                  src={necklaceThree}
                  alt="girl wearing a necklace"
                ></img>
              </div>
              <img
                className="w-100 h-xxl-337 h-md-150 mt-56 custom-brad-4 bord-light"
                src={necklaceFour}
                alt="girl wearing a necklace"
              ></img>
            </figure>
          </div>
        </div>
        <figure className="d-xxl-none center-x mt-5">
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
