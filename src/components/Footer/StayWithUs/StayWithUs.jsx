const StayWithUs = () => {
  return (
    <div
      style={{
        backgroundImage: "url('Images/StayWithUs/Stay-With-Us.svg')",
        backgroundPosition: "bottom left",
        // width: "100%",
        // height: "400px", // Adjust the height as needed
  
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
      className="stay-with-us-wrapper w-full mt-[50px] lg:mt-[74px] py-8 lg:pb-16"
    >
      <div className="stay-with-us lg:container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-[#FFEFE8] rounded-2xl px-5 lg:px-16 py-8 lg:py-14">
        <div className="col-left flex flex-col items-center justify-center">
          <h1 className="text-[#1B1B1B] text-xl lg:text-4xl font-Poppins font-bold lg:font-medium">
            Stay with us
          </h1>
          <p className="text-[#1B1B1B] font-Poppins text-sm lg:text-lg font-normal mt-3">
            Subscribe and be ready for an amazing experience
          </p>
        </div>
        <div className="col-right">
          <div className="email-subscribe flex flex-row items-center justify-between space-x-3 p-2.5">
            <input
              className="bg-white border-collapse focus:border-collapse px-4 py-3 rounded-md"
              type="email"
              placeholder="Enter email address"
            />
            <button className="px-6 lg:px-9 py-2 lg:py-2.5 text-[10px] lg:text-sm font-medium text-white border border-primaryColor bg-primaryColor rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayWithUs;
