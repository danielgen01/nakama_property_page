import React from "react"
import background from "../../assets/ContactBackground.png"
import Formbox from "./Formbox"

const ContactBanner = () => {
  return (
    <div
      className="contact-banner h-[700px] bg-no-repeat bg-cover mt-10 w-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="transparent-background w-screen h-full bg-black/30">
        <div className="headline text-white text-center font-bold">
          <h1 className="text-2xl">Do you have questions ?</h1>
          <h2 className="text-xl">Feel free to write a message</h2>
        </div>
        <Formbox />
      </div>
    </div>
  )
}

export default ContactBanner
