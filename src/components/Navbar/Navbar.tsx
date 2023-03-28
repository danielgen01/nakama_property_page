import React from "react"
import Logo from "../../assets/Logo.png"
import { CiMenuFries } from "react-icons/ci"

const Navbar: React.FC = () => {
  return (
    <>
      <div className="nav-ctn h-20 flex w-screen shadow-md">
        <div className="nav-content flex items-center w-screen justify-between mx-10 lg:mx-20">
          <div className="logo-ctn">
            <img src={Logo} alt="" className="w-52" />
          </div>
          <div className="nav-links  gap-10 text-main-light-textcolor font-regular text-xl hidden lg:flex">
            <a
              href="#"
              className="text-main-dark-blue underline underline-offset-4 decoration-main-dark-blue"
            >
              Home
            </a>
            <a href="#">Why Us</a>
            <a href="#">Type</a>
            <a href="#">Properties</a>
          </div>
          <div className="buttons  gap-10 hidden lg:flex">
            <button className="px-5 py-2 rounded-md bg-[#EAEAEA] text-main-dark-blue font-medium">
              About
            </button>
            <button className="px-5 py-2 rounded-md bg-main-dark-blue text-white font-medium">
              Contact us
            </button>
          </div>
          <div className="touch-menu-icon flex lg:hidden">
            <CiMenuFries className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
