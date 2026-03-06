import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import TourSlider from "./components/TourSlider";
import ResortsSection from "./components/ResortsSection";
import Holidays from "./components/Holidays";
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[#e2e8f0]">
        <HeroSlider />
        <TourSlider />
      </div>
      <ResortsSection />
      <Holidays />

      
    </>
  );
}

export default App;