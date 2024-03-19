import "./App.css";
import Banner from "./pages/home/Banner/Banner";
import Navbar from "./pages/home/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
