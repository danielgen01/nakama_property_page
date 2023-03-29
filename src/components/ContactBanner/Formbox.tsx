import React from "react";

const Formbox = () => {
  return (
    <div className="form-ctn w-full h-full flex justify-center items-center">
    <div className="form-box bg-white h-2/4 w-[80%] flex items-center flex-col rounded-md gap-5">
    <h3 className="text-main-light-blue font-bold mt-5 text-xl">What do you want to know... ?</h3>
    <div className="input-fields flex flex-col gap-5">
        <input type="text" className="bg-gray-300 py-3 lg:px-52 w-full rounded-md text-center" placeholder="Your Email Adress"/>
        <textarea className="bg-gray-300 py-10 w-full px-10  lg:px-52 rounded-md text-center resize-none" placeholder="Your question"/>
    </div>
    <button className="bg-main-light-blue text-white w-1/4 py-2 rounded-md font-bold hover:opacity-80">Submit</button>
    </div>
    </div>
  )
};

export default Formbox;
