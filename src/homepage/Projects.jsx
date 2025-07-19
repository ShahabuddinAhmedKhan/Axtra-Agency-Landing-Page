import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Projects = () => {
    
    return (
        <div>
            <div className='py-20 text-center'>
                <h1 className='text-3xl mb-10'>Have you project in mind?</h1>
                <h2 className='text-7xl'>
                    Let’s make something <br /> great together!
                </h2>
                <button className='btn my-10  h-60 w-60 rounded-full '>
                    <p className='text-gray-500 text-2xl mr-4'>Contact <br /> With Us</p>
                    <FaArrowRightLong className='text-gray-500  text-2xl' />
                </button>
            </div>
        </div>
    );
};

export default Projects;