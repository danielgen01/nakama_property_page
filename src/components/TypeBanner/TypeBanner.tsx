import React from "react"
import appartment from "../../assets/apartment.png"
import office from "../../assets/office.png"
import singlefamily from "../../assets/singefamily.png"
import residential from "../../assets/residential.png"

const TypeBanner = () => {
  return (
    <div className="type-banner mt-10 w-screen ">
      <h1 className="text-main-dark-blue font-bold text-center text-2xl">
        Find your Type properties
      </h1>
      <h2 className="text-main-light-textcolor text-center text-lg">
        Search the type property which suits<br/> for you
      </h2>
      <div className="type-banner-content w-full place-items-center grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-5 mt-10 ">
        <div
          className="grid-item-1 bg-cover h-[300px] bg-no-repeat flex items-end rounded-md w-[300px] shadow-2xl"
          style={{ backgroundImage: `url(${appartment})` }}
        >
          <p className="bg-black/60 w-full py-2 text-center text-white rounded-md">
            Apartment
          </p>
        </div>

        <div
          className="grid-item-2 bg-cover h-[300px] bg-no-repeat flex items-end rounded-md w-[300px] shadow-2xl"
          style={{ backgroundImage: `url(${office})` }}
        >
          <p className="bg-black/60 w-full py-2 text-center text-white rounded-md">
            Office
          </p>
        </div>

        <div
          className="grid-item-3 bg-cover h-[300px] bg-no-repeat flex items-end rounded-md w-[300px] shadow-2xl"
          style={{ backgroundImage: `url(${singlefamily})` }}
        >
          <p className="bg-black/60 w-full py-2 text-center text-white rounded-md">
            Single Family
          </p>
        </div>

        <div
          className="grid-item-4 bg-cover h-[300px] bg-no-repeat flex items-end rounded-md w-[300px] shadow-2xl"
          style={{ backgroundImage: `url(${residential})` }}
        >
          <p className="bg-black/60 py-2 w-full text-center text-white rounded-md">
            Residential
          </p>
        </div>
      </div>
    </div>
  )
}

export default TypeBanner
