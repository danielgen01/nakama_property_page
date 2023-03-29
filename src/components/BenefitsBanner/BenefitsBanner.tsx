import React from "react"
import Benefits_pic from "../../assets/Benefits_pic.png"

const BenefitsBanner = () => {
  return (
    <div className="benefits-banner mt-10 w-screen">
      <div className="banner-content grid grid-cols-1 place-items-center md:grid-cols-2  gap-5">
        <div className="picture-ctn  justify-center order-2 md:order-1 hidden md:flex ">
          <img src={Benefits_pic} alt="" className="" />
        </div>
        <div className="benefits-list flex flex-col items-start lg:justify-center order-1 md:order-2">
          <h1 className="text-main-dark-blue text-xl font-bold lg:text-3xl text-center">
            Why we suit for you
          </h1>
          <div className="benefit-1-ctn flex mt-5 gap-5">
            <div className="px-5 rounded-md font-bold text-xl bg-main-light-blue text-white flex items-center">
              1
            </div>
            <p className="text-sm md:text-md lg:text-xl text-main-light-blue font-bold">
              We are not asking for any free
            </p>
          </div>

          <div className="benefit-2-ctn flex mt-5 gap-5">
            <div className="px-5 rounded-md font-bold text-xl bg-main-light-blue text-white flex items-center">
              2
            </div>
            <p className="text-sm md:text-md lg:text-xl text-main-light-blue font-bold">
              We take care for every single thing that the buyer need to
              complete
            </p>
          </div>

          <div className="benefit-3-ctn flex mt-5 gap-5">
            <div className="px-5 rounded-md font-bold text-xl bg-main-light-blue text-white flex items-center">
              3
            </div>
            <p className="text-sm md:text-md lg:text-xl text-main-light-blue font-bold">
              We help landlord to register their license to government
            </p>
          </div>

          <div className="benefit-4-ctn flex mt-5 gap-5">
            <div className="px-5 rounded-md font-bold text-xl bg-main-light-blue text-white flex items-center">
              4
            </div>
            <p className="text-sm md:text-md lg:text-xl text-main-light-blue font-bold">
              We help the buyers to find the place without stress and help them
              with paperwork
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitsBanner
