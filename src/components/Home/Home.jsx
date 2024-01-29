import React from 'react';
import Hero from './Hero/Hero';
import ExperienceAmulette from './ExperinceAmulette/ExperienceAmulette';
import AmuletteFeatures from './AmuletteFeatures/AmuletteFeatures';
import OurProducts from './OurProducts/OurProducts';
import CoreValues from './CoreValues/CoreValues';
import DownloadApp from './DownloadApp/DownloadApp';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <div className='home containerr mx-auto text-black'>
       
                <Hero/>
                <ExperienceAmulette/>
                <AmuletteFeatures/>
                <OurProducts/>
                <CoreValues/>
                <DownloadApp/>
                <ContactUs/>
            </div>
        </div>
    );
};

export default Home;