import React from 'react';

const LicenseTabs = () => {
    return (
        <div className="license-tabs flex flex-row items-center justify-between space-x-6 bg-[#FFEFE8] rounded-full px-2.5 py-1.5 mt-5">
        <div className="tab-item all bg-primaryColor text-white px-8 py-2 rounded-full cursor-pointer">All</div>
        <div className="tab-item free cursor-pointer">Free</div>
        <div className="tab-item premium cursor-pointer">Premium</div>
      </div>
    );
};

export default LicenseTabs;