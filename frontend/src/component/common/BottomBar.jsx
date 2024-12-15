import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sideBarData } from '../../utils/data'; // Your sidebar data

const BottomBar = () => {
    const navigate = useNavigate(); // Use the navigate hook from react-router-dom
    const [activeItem, setActiveItem] = useState("Dashboard");

    return (
        <div className="fixed bottom-0 w-full bg-white shadow-lg rounded-t-3xl border-t border-gray-200 flex justify-around py-3 md:hidden">
            {sideBarData.map((item, index) => (
                <div
                    key={index}
                    onClick={() => {
                        setActiveItem(item.text);
                        navigate(item.link);
                    }}
                    className={`flex py-1 flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                        activeItem === item.text ? "border-t-4 border-[#DF5532] rounded-sm" : "border-t-4 border-transparent"
                    }`}
                >
                    <div
                        className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
                            activeItem === item.text
                                ? "bg-gradient-to-tr from-[#DF5532] to-[#F2884D] shadow-md"
                                : "bg-[#D6D1D5]"
                        }`}
                    >
                        <img
                            src={item.icon}
                            alt={item.text}
                            className={`w-5 h-5 ${
                                activeItem === item.text ? "text-white" : "text-gray-400"
                            }`}
                        />
                    </div>
                    <p
                        className={`text-sm mt-1 transition-all duration-300 ${
                            activeItem === item.text ? "text-[#DF5532] font-semibold" : "text-gray-400"
                        }`}
                    >
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BottomBar;
