import React from 'react';

const ExperienceAmulette = () => {
    return (
        <div className='experience-amulette-wrapper mt-9 pb-9'>
            <div className='experience-amulette container mx-auto flex flex-row items-center justify-center'>
            <div className='col-left flex flex-col items-start justify-center'>
            <h1 className='text-3xl font-bold'><span className=''>Experience </span><span className='text-primaryColor'>Amulette</span></h1>
            <p className='text-left text-headingColor font-normal text-xl pt-5'>
            Immerse yourself in a world of creativity with Amulette – where technology meets personal expression, seamlessly connecting moments and memories.
            </p>
            <ul className='service-list flex flex-col items-start justify-center space-y-3 mt-[34px]'>
                <li className='flex flex-row items-start justify-center space-x-3.5'><img className='' src="Images/ExperienceAmulette/check.svg"/><span>Feel the power of wearable storytelling</span></li>
                <li className='flex flex-row items-start justify-center space-x-3.5'><img className='' src="Images/ExperienceAmulette/check.svg"/><span>Unlock a new dimension of self-expression</span></li>
                <li className='flex flex-row items-start justify-center space-x-3.5'><img className='' src="Images/ExperienceAmulette/check.svg"/><span>Experience Amulette's compact design</span></li>
            </ul>
            </div>
<div className='col-right'>
    <img src="Images/ExperienceAmulette/Desktop.svg" alt=''/>
</div>
            </div>
        </div>
    );
};

export default ExperienceAmulette;