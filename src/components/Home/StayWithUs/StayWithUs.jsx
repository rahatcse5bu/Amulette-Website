const StayWithUs = () => {
  return (
    <div
      style={{
        backgroundImage: "url('Images/StayWithUs/Stay-With-Us.svg')",
        backgroundPosition: "bottom left",
        // width: "100%",
        // height: "400px", // Adjust the height as needed
  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      className="stay-with-us-wrapper lg:mt-[74px] lg:pb-16"
    >
      <div className="stay-with-us container mx-auto flex flex-row items-center justify-between bg-[#FFEFE8] rounded-2xl px-16 py-14">
        <div className="col-left">
          <h1 className="text-[#1B1B1B] text-4xl font-Poppins font-medium">
            Stay with us
          </h1>
          <p className="text-[#1B1B1B] font-Poppins text-lg font-normal mt-3">
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
            <button className="px-9 py-2.5 text-sm font-medium text-white border border-primaryColor bg-primaryColor rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayWithUs;
