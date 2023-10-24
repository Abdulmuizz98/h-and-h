import { HhTwitter, HhInstagram, HhWhatsapp } from "../Icons";

const Footer = () => {
  return (
    <footer className="footer mt-100 mt-xxl-150">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3 fs-xl-1 fs-md-1 bord-top">
          <p className="mb-0">H&HJEWELS&copy;2021</p>
          <div>
            <a href="#placeholder">
              <HhInstagram />
            </a>
            <a href="#placeholder" className="mx-md-5 mx-4">
              <HhWhatsapp />
            </a>
            <a href="#placeholder">
              <HhTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
