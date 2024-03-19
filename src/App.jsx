import "./App.css";
import FeatureDestination from "./pages/FeatureDestination/FeatureDestination";
import Banner from "./pages/home/Banner/Banner";
import DealAndOffer from "./pages/home/DealAndOffer/DealAndOffer";
import Footer from "./pages/home/Footer/Footer";
import Navbar from "./pages/home/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Banner className="max-w-6xl mx-auto"/>
        <FeatureDestination/>
        <DealAndOffer/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
