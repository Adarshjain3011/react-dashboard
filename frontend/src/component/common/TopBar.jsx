
import React from 'react';

import { LuBellDot } from "react-icons/lu";

import { IoMdArrowDropdown } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";

import { useState, useEffect } from 'react';

const TopBar = () => {


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check the window width
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 600); // Adjust breakpoint if needed
        };

        // Check on initial render
        checkMobile();

        // Add event listener to handle window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkMobile);
        };


    }, []);

    return (
        <div className='relative w-[100%] sm:w-[99.3%] bg-white flex justify-end items-end sm:ml-2 sm:px-8'>

            {

                !isMobile ? (


                    <div className='flex justify-center items-center py-2 gap-4'>

                        <LuBellDot size={30}></LuBellDot>
                        <img src="/icons/userImage.png" alt="" width={40} height={40} />

                        <div className='flex flex-col'>

                            <p className='text-[#303030] font-bold'>Adarsh</p>
                            <p className='text-[#848484]'>Manager</p>

                        </div>

                        <IoMdArrowDropdown size={20} className='text-[#303030]' />

                    </div>

                )
                    :
                    (
                        <div className=' relative w-full flex justify-between items-center px-5 p-2'>

                            <div className='text-[#221112] font-semibold'>
                                9:30
                            </div>

                            <div className='flex gap-2'>

                                <MdSignalCellularAlt className='text-[#221112]'/>
                                <FaWifi className='text-[#221112]'/>
                                <FaBatteryFull className='text-[#221112]'/>

                            </div>

                        </div>

                    )
            }

        </div>
    )
}

export default TopBar;


