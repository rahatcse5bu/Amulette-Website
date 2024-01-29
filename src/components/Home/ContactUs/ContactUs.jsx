import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us container mx-auto">
        <h1 className="text-center font-Poppins text-[40px] font-bold">
          Contact Us for any Queries
        </h1>
<div className="amulette-assist-wrapper flex flex-row items-center justify-center">
<div className="amulette-assist flex flex-row items-center justify-start bg-[#D9D9D9] border-[1px] border-[#D9D9D9] space-x-3 rounded-full px-2.5 py-2 mt-10">
          <span className="bg-primaryColor text-white font-semibold text-center text-sm px-10 py-1.5 rounded-full">
            Amulette
          </span>{" "}
          <span className=""> Is happy to assist you!</span>
        </div>
</div>
        <div className="contact-form-row flex flex-row items-start justify-between lg:space-x-[206px] lg:mt-[68px]">
          <div className="col-left w-1/2">
            <img src="Images/ContactUs/Contact-Us-Img.svg" width={615} />
          </div>
          <div className="col-right flex flex-row items-center justify-start w-1/2">
            <div className="contact-form flex flex-col items-start justify-start w-full space-y-3">
              <div className="email-wrapper flex flex-col items-start justify-start w-[85%]">
                <label className="">
                  Email<sup className="text-[#FF5551] font-semibold text-sm">*</sup>
                </label>
                <input className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] rounded-[10px]" type="email" name="" placeholder="example@gmail.com" />
              </div>
              <div className="subject-wrapper flex flex-col items-start justify-start w-[85%]">
                <label className="">
                  Subject<sup className="text-[#FF5551] font-semibold text-sm">*</sup>
                </label>
                <select className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] rounded-[10px]">
                  <option disabled> select from here</option>
                  <option value={"purchases"}> Purchases</option>
                </select>
              </div>
              <div className="message-wrapper flex flex-col items-start justify-start w-[85%]">
                <label className="">
                  Message
                </label>
                <textarea rows={5} cols={90} className="w-full mt-2.5 px-5 py-5 border border-[#E0E0E0] rounded-[10px]">

                </textarea>
            
              </div>
              <div className="button-wrapper pt-2">
                <button style={{boxShadow: '3.045px 10.15px 22.855px 0px rgba(246, 95, 25, 0.10)'
}} className="text-white bg-primaryColor text-lg font-Poppins font-medium px-20 py-3.5 rounded-lg">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
