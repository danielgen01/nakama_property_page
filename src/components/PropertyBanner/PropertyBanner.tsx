import React from "react"
import property1 from "../../assets/property_1.png"
import property2 from "../../assets/property_2.png"
import property3 from "../../assets/property_3.png"
import property4 from "../../assets/property_4.png"
import property5 from "../../assets/property_5.png"
import property6 from "../../assets/property_6.png"

const PropertyBanner = () => {
  return (
    <div className="property-banner-ctn h-[700px] mt-52 w-screen ">
      <div className="headline flex justify-between lg:mx-52">
        <h1 className="font-bold text-main-dark-blue text-xl lg:text-4xl">
          Popular properties
        </h1>
        <button className="text-main-light-blue font-bold">View All</button>
      </div>
      <div className="grid-net grid grid-cols-2 lg:grid-cols-3 gap-2 place-items-center mt-10">
        <div className="grid-item-1 h-[300px] max-w-[300px] shadow-lg flex flex-col gap-2">
          <img src={property1} alt="" className="max-h-[200px]" />
          <h3 className="font-bold text-xl text-main-dark-blue mx-2">
            500.000€
          </h3>
          <button className="w-[90%] font-bold text-xl bg-main-light-blue text-white mx-2 py-2 rounded-md hover:opacity-90">
            View Details
          </button>
        </div>

        <div className="grid-item-1 h-[300px] max-w-[300px] shadow-lg flex flex-col gap-2">
          <img src={property2} alt="" className="max-h-[200px]"/>
          <h3 className="font-bold text-xl text-main-dark-blue mx-2">
            400.000€
          </h3>
          <button className="w-[90%] font-bold text-xl bg-main-light-blue text-white mx-2 py-2 rounded-md hover:opacity-90">
            View Details
          </button>
        </div>

        <div className="grid-item-1 h-[300px] max-w-[300px] shadow-lg flex flex-col gap-2">
          <img src={property3} alt="" className="max-h-[200px]"/>
          <h3 className="font-bold text-xl text-main-dark-blue mx-2">
            250.000€
          </h3>
          <button className="w-[90%] font-bold text-xl bg-main-light-blue text-white mx-2 py-2 rounded-md hover:opacity-90">
            View Details
          </button>
        </div>

        <div className="grid-item-1 h-[300px] max-w-[300px] shadow-lg flex flex-col gap-2">
          <img src={property4} alt="" className="max-h-[200px]"/>
          <h3 className="font-bold text-xl text-main-dark-blue mx-2">
            1.000.000€
          </h3>
          <button className="w-[90%] font-bold text-xl bg-main-light-blue text-white mx-2 py-2 rounded-md hover:opacity-90">
            View Details
          </button>
        </div>

        <div className="grid-item-1 h-[300px] max-w-[300px] shadow-lg flex flex-col gap-2">
          <img src={property5} alt="" className="max-h-[200px]"/>
          <h3 className="font-bold text-xl text-main-dark-blue mx-2">
            520.000€
          </h3>
          <button className="w-[90%] font-bold text-xl bg-main-light-blue text-white mx-2 py-2 rounded-md hover:opacity-90">
            View Details
          </button>
        </div>

        <div className="grid-item-1 h-[300px] max-w-[300px] shadow-lg flex flex-col gap-2">
          <img src={property6} alt="" className="max-h-[200px]"/>
          <h3 className="font-bold text-xl text-main-dark-blue mx-2">
            600.000€
          </h3>
          <button className="w-[90%] font-bold text-xl bg-main-light-blue text-white mx-2 py-2 rounded-md hover:opacity-90">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyBanner
