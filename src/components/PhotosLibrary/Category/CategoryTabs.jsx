

const CategoryTabs = () => {
    return (
        <div className="category-tabs flex flex-col items-center justify-center space-y-4 mt-5 ">
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/All-Photos.svg"/><span className="">All Photos</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Community.svg"/><span className="">Community</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444]  text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Sports.svg"/><span className="">Sports</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Smilies.svg"/><span className="">Smilies</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-primaryColor text-white text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Nature.svg"/><span className="">Nature</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444]  text-[16px] font-medium  rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Animals.svg"/><span className="">Animals</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Abstract.svg"/><span className="">Abstract</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Technology.svg"/><span className="">Technology</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Art.svg"/><span className="">Art</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Space.svg"/><span className="">Space</span>
        </div>
        <div className="tab-item w-full flex flex-row items-center justify-start space-x-2 bg-categoryTabColor text-[#444] text-[16px] font-medium   rounded-full px-6 py-2 cursor-pointer">
            <img src="Images/PhotosLibrary/Category/Food.svg"/><span className="">Food</span>
        </div>

      </div>
    );
};

export default CategoryTabs;