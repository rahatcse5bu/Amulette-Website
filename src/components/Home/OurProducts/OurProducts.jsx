import React, { useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import PrevButton from '../../NextPrevButton/PrevButton';
import NextButton from '../../NextPrevButton/NextButton';
import PrevButtonCustomCF from '../../NextPrevButton/PrevButtonCustomCF';
import NextButtonCustomEB from '../../NextPrevButton/NextButtonCustomEB';
// import PrevButtonCustomCF from '../../NextPrevButton/PrevButtonCustomCF';
const OurProducts = () => {
    const [isPrevDisabled, setIsPrevDisabled] = useState(true)
    const [isNextDisabled, setIsNextDisabled] = useState(false)
  
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  const productsData=[

    {
        id:1,
        title:'Amulette',
        img:"Images/OurProducts/Amulette.svg",
        description:`A card-sized device that turns your memories ...`,
        price: 50.00
    },
    {
        id:1,
        title:'Amulette Charger',
        img:"Images/OurProducts/Amulette-Charger.svg",
        description:`Keep your Amulette powered and ready to ...`,
        price: 10.00
    },
    {
        id:1,
        title:'Amulette Cover Case',
        img:"Images/OurProducts/Amulette-Cover.svg",
        description:`Protect and stylize your Amulette with our ...`,
        price:20.00
    },
    {
        id:1,
        title:'Amulette Combo Deal',
        img:"Images/OurProducts/Amulette-Combo.svg",
        description:`Amulette Device, Charger, and Case Bundle`,
        price: 65.00
    }
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    return (
        <div className='our-products-wrapper mt-[52px]'>
        <div className='our-products container mx-auto'>
        <h1 className="lg:text-[40px] font-semibold font-Poppins text-center">
          <span className="text-primaryColor">Our </span>
          <span className="">
            Products
          </span>
        </h1>
        <div className="carousel-container relative ">
          <PrevButtonCustomCF prevRef={prevRef} disabled={isPrevDisabled} />
          <NextButtonCustomEB nextRef={nextRef} disabled={isNextDisabled} />

          <Carousel className="mx-auto mt-6 md:mt-16 exclusive-business-slider relative z-0"
            //        partialVisible={false}
            swipeable={true}
            draggable={true}
            //   showDots={true}
            responsive={responsive}
            //   ssr={true} // means to render carousel on server-side.
            // infinite={true}
            //   centerMode={true}
            autoPlay={true}
            //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={10000}
            //   keyBoardControl={true}
            //   customTransition="all .5"
            //   transitionDuration={1000}
            //   containerClass="carousel"
            //   removeArrowOnDeviceType={["tablet", "mobile"]}
            //   deviceType={this.props.deviceType}


            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px mx-4"
            customLeftArrow={<PrevButton prevRef={prevRef} />}
            customRightArrow={<NextButton nextRef={nextRef} />}
            beforeChange={(nextSlide) => {
              console.log('beforeChange nextSlide: ', nextSlide)
              setIsPrevDisabled(nextSlide === 0)
              setIsNextDisabled(nextSlide === 2)
            }}
          // renderButtonGroupOutside
          >
            {productsData?.map((data, index) => (
              <ProductCard key={index} product={data} index={index} />
            ))}

          </Carousel>
          <div className='flex flex-row items-center justify-center mt-10'>
            <button className='px-8 py-4 cursor-pointer hover:bg-primaryColor hover:text-white text-primaryColor border-2 border-primaryColor rounded-[10px]'>View ALL Products</button>
          </div>
        </div>
            </div>
        </div>
    );
};

export default OurProducts;