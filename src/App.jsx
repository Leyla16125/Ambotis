import Navbar from "./components/Navbar";
import HeroSlider from "./components/Slider";
import TourSlider from "./components/TourSlider";
import ResortsSection from "./components/ResortsSection";
import Holidays from "./components/Holidays";
import Partners from "./components/Partners";
import Filter from "./components/Filter";


function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f0f3fe] mt-10">
        <Filter />
        <HeroSlider />
        <TourSlider />
      </div>
      <ResortsSection />
      <Partners/>
      <Holidays />

      

      
    </>
  );
}

export default App;