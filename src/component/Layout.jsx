import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is used to render child routes
import SideBar from './SideBar';
import BottomBar from './common/BottomBar';
import TopBar from './common/TopBar';

const Layout = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check the window width
        const checkMobile = () => {
            console.log(window.innerWidth)
            setIsMobile(window.innerWidth < 1100); // Adjust breakpoint if needed
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
        <div className="flex min-h-screen w-screen bg-gray-100">
            {/* Sidebar */}
            {!isMobile && (
                <div className="w-[250px] bg-white shadow-md">
                    <SideBar />
                </div>
            )}

            {/* Main Content */}
            <div className="flex flex-col flex-grow">
                <TopBar />

                <div className="flex-grow sm:p-4 sm:m-4">
                    {/* Dashboard or Child Routes */}
                    <div className="h-full w-full shadow-xl bg-white rounded-xl p-4">
                        <Outlet /> {/* This will render the matched route's component */}
                    </div>
                </div>
            </div>

            {/* BottomBar for Mobile */}
            {isMobile && (
                <div className="fixed bottom-0 w-full bg-gray-800 text-white z-50 block xl:hidden">
                    <BottomBar />
                </div>
            )}
        </div>
    );
};

export default Layout;
