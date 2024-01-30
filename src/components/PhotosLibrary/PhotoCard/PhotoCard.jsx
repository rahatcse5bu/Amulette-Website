import React from 'react';

const PhotoCard = ({photo}) => {
    return (
        <div className='photo-card-wrapper'>
        <div className='photo-card'>
   <img className='h-48 w-48 rounded-2xl border border-[#E5E5E4]' src= {`${photo.photo}`} width={200} height={200} />
            </div>
            
        </div>
    );
};

export default PhotoCard;