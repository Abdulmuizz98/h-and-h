import { HhHamburger, HhClose } from "../Icons";

const Header = () => {
  const toggleNavMenu = () => {
    const navMenuSmall = document.querySelector(".nav-menu-sm");
    navMenuSmall.classList.toggle("d-none");
  };
  return (
    <nav className="header py-3 fixed-top bgd-clip opacity-1 ">
      <div className="container d-flex position-relative align-items-center">
        <a href="#" className="ff-serif fs-sm-4 fs-md-3 fs-xl-4 fw-bold">
          H&H Jewels
        </a>
        <button
          className="navbar-toggler ms-auto d-lg-none"
          type="button"
          onClick={() => toggleNavMenu()}
        >
          <HhHamburger />
        </button>

        <div className="nav-menu-lg ms-auto d-none d-lg-block">
          <ul className="nav-links d-flex custom-gap justify-content-between list-unstyled rm-mb fw-300 fs-sm-5">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#category">Category</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-menu-sm d-none d-lg-none position-absolute end-0 px-2 py-50 w-150 top-0 bg-custom-secondary">
          <button
            className="navbar-toggler d-lg-none position-absolute start-21 top-18"
            type="button"
            onClick={() => toggleNavMenu()}
          >
            <HhClose />
          </button>

          <ul className="nav-links list-unstyled text-center rm-mb fw-300 fs-sm-3">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="my-40">
              <a href="#about">About</a>
            </li>
            <li className="my-40">
              <a href="#category">Category</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
