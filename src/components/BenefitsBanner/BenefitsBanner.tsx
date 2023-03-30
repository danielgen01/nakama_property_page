import React from "react"
import Benefits_pic from "../../assets/Benefits_pic.png"
import {
  TbSquareNumber1,
  TbSquareNumber2,
  TbSquareNumber3,
  TbSquareNumber4,
} from "react-icons/tb"

const BenefitsBanner = () => {
  return (
    <div className="benefits-banner mt-10 w-screen flex justify-center">
      <div className="banner-content grid grid-cols-1 place-items-center md:grid-cols-2  gap-5">
        <div className="picture-ctn  justify-center order-2 md:order-1 hidden md:flex ">
          <img src={Benefits_pic} alt="" className="" />
        </div>
        <div className="benefits-list flex flex-col items-start lg:justify-center order-1 md:order-2">
          <h1 className="text-main-dark-blue text-xl font-bold lg:text-3xl text-center">
            Why we suit for you
          </h1>
          <div className="benefit-1-ctn flex mt-5 gap-5 items-center">
            <TbSquareNumber1 className="text-4xl rounded-md bg-main-light-blue text-white " />
            <p className="text-sm md:text-md lg:text-xl text-main-light-blue font-bold">
              We are not asking for any free
            </p>
          </div>

          <div className="benefit-2-ctn flex mt-5 gap-5 items-center">
            <TbSquareNumber2 className="text-4xl rounded-md bg-main-light-blue text-white " />
            <p className="text-sm md:text-md lg:text-xl text-main-light-blue font-bold">
              We take care for every single thing that the buyer need to
              complete
            </p>
          </div>

          <div className="benefit-3-ctn flex mt-5 gap-5 items-center">
            <TbSquareNumber3 className="text-4xl rounded-md bg-main-light-blue text-white " />
            <p className="text-sm md:text-md lg:text-xl text-main-light-blue font-bold">
              We help landlord to register their license to government
            </p>
          </div>

          <div className="benefit-4-ctn flex mt-5 gap-5 items-center">
            <TbSquareNumber4 className="text-4xl rounded-md bg-main-light-blue text-white " />
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
