import Header from "./components/layout/Header";
import Showcase from "./components/layout/Showcase";

const App = () => {
  return (
    <>
      <div className="home-section h-full custom-bg">
        <Header />
        <Showcase />
      </div>
    </>
  );
};

export default App;
