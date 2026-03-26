import React from "react";
import { MousePointer2Off } from "lucide-react";
import pic1 from "/images/pic1.png";
const Info = () => {
  return (
    <div>
      <div className="container mx-auto lg:px-20 p-5 lg:gap-5  flex lg:justify-center  lg:items-center lg:flex-nowrap flex-wrap  flex-row">
        <div className="lg:border lg:border-gray-400/60 lg:py-4 px-3 lg:w-4/12 w-1/2 rounded  py-5 ">
          <div className="flex justify-center mb-2">
            <img src="/images/pic2.png" alt="" width={35} />
          </div>
          <h4 className="text-center text-[#E2B05E] font-bold">
            One click demo import
          </h4>

          <p className="text-center">
            Instantly import pre-designed content and layouts with one click
          </p>
        </div>
        <div className="lg:border lg:border-gray-400/60 lg:py-4 px-3 lg:w-4/12 w-1/2 rounded  py-5">
          <div className="flex justify-center mb-2">
            <img src="/images/money-back.png" alt="" width={35} />
          </div>
          <h4 className="text-center text-[#E2B05E] font-bold">
            Return in 3 days
          </h4>
          <p className="text-center">
            Instantly import pre-designed content and layouts with one click
          </p>
        </div>
        <div className="lg:border lg:border-gray-400/60 lg:py-4 px-3 lg:w-4/12 w-1/2 rounded  py-5">
          <div className="flex justify-center mb-2">
            <img src="/images/pic5.png" alt="" width={35} />
          </div>
          <h4 className="text-center text-[#E2B05E] font-bold">24/7 Support</h4>
          <p className="text-center">
            Instantly import pre-designed content and layouts with one click
          </p>
        </div>
        <div className="lg:border lg:border-gray-400/60 lg:py-4 px-3 lg:w-4/12 w-1/2 rounded  py-5">
          <div className="flex justify-center mb-2">
            <img src="/images/pic6.png" alt="" width={35} />
          </div>
          <h4 className="text-center text-[#E2B05E] font-bold">
            Free Shipping
          </h4>
          <p className="text-center">
            Instantly import pre-designed content and layouts with one click
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
