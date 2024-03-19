import img1 from "../../assets/f1.png";
import img2 from "../../assets/f2.png";
import img3 from "../../assets/f3.png";
const FeatureDestination = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold my-10 p-4 text-left">Featured Destinations</h2>
      <div className="grid grid-cols-3 gap-5">
        <div className=" bg-base-100 shadow-xl rounded-lg p-2">
          <img src={img1} className="w-full" alt="img1" />
          <div className="">
            <h2 className="font-bold p-3 text-left">
              Stopover opportunity in İstanbul with Turkish Airlines
            </h2>
            <button className="btn primary-bg px-16 my-3">Read More</button>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl rounded-lg p-2">
          <img src={img2} className="w-full" alt="img1" />
          <div className="">
            <h2 className="font-bold p-3 text-left">
              Stopover opportunity in İstanbul with Turkish Airlines
            </h2>
            <button className="btn primary-bg px-16 my-3">Read More</button>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl rounded-lg p-2">
          <img src={img3} className="w-full" alt="img1" />
          <div className="">
            <h2 className="font-bold p-3 text-left">
              Stopover opportunity in İstanbul with Turkish Airlines
            </h2>
            <button className="btn primary-bg px-16 my-3">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDestination;
