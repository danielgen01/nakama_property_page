import React from "react"
import House_image from "../../assets/Main_house_image.png"
import SearchBox from "./SearchBox"

const MainBanner: React.FC = () => {
  return (
    <div className="main-banner h-[500px] md:h-[700px] lg:h-[600px] w-screen">
      <div className="grid-net grid grid-cols-1 lg:grid-cols-5 grid-rows-1">
        <div className="grid-item-1 h-[250px] md:h-[350px] lg:h-[600px] bg-main-dark-blue col-span-2 flex flex-col items-center justify-center gap-5 z-20">
            <h1 className="uppercase text-white text-left leading-10 font-bold text-4xl lg:text-6xl tracking-wider">discover your<br/> dream house</h1>
            <p className="text-white lg:text-xl mb-10">Buying a home is a life-changing experience, so shouldn't  <br/> 
            your real estate agent be a life changer</p>
            <SearchBox />
        </div>

        <div
          className="grid-item-2 h-[250px] md:h-[350px] lg:h-[600px] bg-no-repeat col-span-3 bg-cover z-10"
          style={{ backgroundImage: `url(${House_image})` }}
        ></div>
      </div>
    </div>
  )
}

export default MainBanner
