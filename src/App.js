import AboutUs from "./components/layout/AboutUs";
import Category from "./components/layout/Category";
import ContactUs from "./components/layout/ContactUs";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Showcase from "./components/layout/Showcase";

const App = () => {
  return (
    <>
      <div id="home" className="home-section h-full custom-bg">
        <Header />
        <Showcase />
      </div>
      <AboutUs />
      <Category />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
