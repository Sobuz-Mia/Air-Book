import bannerImg from "../../../assets/banner-img.png";
import { FaRegCircle, FaSearch } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
const Banner = () => {
  return (
    <div
      className="min-h-screen overflow-hidden relative max-w-screen-xl"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute top-24 left-24">
        <p className="text-5xl font-bold text-white my-6">
          Welcome To <span className="text-[#006CE4]">AirBook</span>
        </p>
        <div className=" bg-white rounded-lg">
          <div className="p-5">
            <div className="flex justify-between">
              <div className="flex gap-5">
                <button className="btn"> <FaRegCircle/>One way</button>
                <button className="btn"> <FaRegCircle/> Round Trip</button>
              </div>
              <div className="flex gap-5">
                <select className="select btn">
                  <option disabled selected>
                    1 Traveler
                  </option>
                </select>
                <select className="select btn ">
                  <option disabled selected>
                    Economy
                  </option>
                </select>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex gap-5 p-3">
            <div className="border rounded-lg flex items-center font-semibold p-2">
                <p>DAC</p>
               <TbMinusVertical className="my-3"/>
                <p className="">
                    <h2>DHAKA</h2>
                    <span className="font-normal">Hazrat Shahajal International</span>
                </p>
            </div>
            <div className="border rounded-lg flex items-center font-semibold p-2">
                <p>Cxb</p>
               <TbMinusVertical className="my-3"/>
                <p className="">
                    <h2>Cox</h2>
                    <span className="font-normal">Cox bazar International</span>
                </p>
            </div>
            <div className="border rounded-lg flex items-center font-semibold p-2">
                <p>03</p>
               <TbMinusVertical className="my-3"/>
                <p className="">
                    <h2>Octobee</h2>
                    <span className="font-normal">Tuesday, 2023</span>
                </p>
            </div>
            <div className="border rounded-lg flex items-center font-semibold p-2">
                <p>03</p>
               <TbMinusVertical className="my-3"/>
                <p className="">
                    <h2>Octobee</h2>
                    <span className="font-normal">Tuesday, 2023</span>
                </p>
            </div>
            <div className=" flex items-center font-semibold p-2">
                <button className="btn primary-bg text-white"> <FaSearch/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
