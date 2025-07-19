import gsap from 'gsap';
import React, { useEffect } from 'react';

const Cursor = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const {clientX, clientY} = event
            
            gsap.to("#cursor", {
                x: clientX - 20,
                y: clientY - 20,
                duration: 1,
                
                delay: 0,
                ease: "power4.out"
            })
            
        }
        
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    },[])
    return (
        <div id='cursor' className='fixed top-0 left-0 border-2 border-black  w-10 h-10 rounded-full flex justify-center items-center z-90  pointer-events-none'> 
            <div id='cursorDot' className=' bg-black w-2 h-2 rounded-full'/>
        </div>
        
            
        
    );
};

export default Cursor;