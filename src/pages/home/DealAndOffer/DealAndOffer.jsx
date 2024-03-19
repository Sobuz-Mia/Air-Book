import deal1 from "../../../assets/d1.png";
import deal2 from "../../../assets/d2.png";
import deal3 from "../../../assets/d3.png";
const DealAndOffer = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold my-10 p-4 text-left">
        Deal And Offers
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className=" bg-base-100 shadow-xl rounded-lg p-2 flex gap-3 items-center">
          <img src={deal3} alt="" />
          <div className="p-4">
            <h2 className="font-bold">With bkash payment only</h2>
            <p className="text-[#006CE4] text-xl">
              up to 14% discount on the base fare of domestic flights
            </p>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl rounded-lg p-2 flex gap-3 items-center">
          <img src={deal2} alt="" />
          <div className="p-4">
            <h2 className="font-bold">With bkash payment only</h2>
            <p className="text-[#006CE4] text-xl">
              up to 12% discount on the base fare of domestic flights
            </p>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl rounded-lg p-2 flex gap-3 items-center">
          <img src={deal1} alt="" />
          <div className="p-4">
            <h2 className="font-bold">With bkash payment only</h2>
            <p className="text-[#006CE4] text-xl">
              up to 14% discount on the base fare of domestic flights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealAndOffer;
