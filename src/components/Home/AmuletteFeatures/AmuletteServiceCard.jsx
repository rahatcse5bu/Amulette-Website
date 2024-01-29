import React from 'react';

const AmuletteServiceCard = ({service}) => {
    return (
        <div className="service-card flex flex-col items-center justify-center">
        <img src={`${service.image}`} alt={service.title} />
        <h2 className="text-center text-2xl font-semibold text-black mt-3">
        {service.title}
        </h2>
        <p className="text-center text-xl font-normal leading-9 mt-2.5">
         {service.description}
        </p>
      </div>
    );
};

export default AmuletteServiceCard;