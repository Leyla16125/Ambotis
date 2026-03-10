import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TourSlider from "./components/TourSlider";
import ResortsSection from "./components/ResortsSection";
import Holidays from "./components/Holidays";
import Partners from "./components/Partners";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu />
      <div className="ml-10">
      <Navbar />
      <div className="bg-[#f0f3fe] mt-10">
        <Filter />
        <Slider />
        <TourSlider />
      </div>
      <ResortsSection />
      <Partners/>
      <Services />
      <Holidays />
      <Footer />
      </div>

      

      
    </>
  );
}

export default App;