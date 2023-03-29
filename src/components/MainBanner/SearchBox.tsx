import React from "react";

const SearchBox:React.FC = () => {
  return (
    <>
    <div className="search-box  w-80 lg:w-[750px] bg-white rounded-md lg:-mr-96 xl:-mr-56 -mb-72 lg:-mb-0 z-50 py-6">
        <div className="box-content grid grid-cols-2 lg:grid-cols-4 mx-3 gap-5">
            <div className="grid-item-1 flex justify-between flex-col">
                <h4 className="text-main-light-blue font-bold">Location</h4>
                <input type="text" defaultValue={"Hamburg,GER"} className="bg-[#E2E2E2] rounded-md text-center py-2" />
                    </div>

            <div className="grid-item-2 flex justify-between flex-col">
                <h4 className="text-main-light-blue font-bold">Type</h4>
                <input type="text" defaultValue={"Apartment"} className="bg-[#E2E2E2] rounded-md text-center py-2" />
                    </div>

                    <div className="grid-item-2 flex justify-between flex-col">
                <h4 className="text-main-light-blue font-bold">Price Range</h4>
                <input type="text" defaultValue={"900€ - 1200€"} className="bg-[#E2E2E2] rounded-md text-center py-2" />
                    </div>

                    <div className="grid-item-2 text-center flex items-center justify-center">
                    <button className="bg-[#4BFF73] text-main-dark-blue font-bold  py-3 rounded-md px-5 hover:opacity-80">Explore<br/> now</button>
                    </div>
        </div>
    </div>
    </>
  )
};

export default SearchBox;
