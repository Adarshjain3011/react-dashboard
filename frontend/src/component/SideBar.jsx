import React, { useState } from 'react';
import { sideBarData } from '../utils/data';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const [itemData,setItemData] = useState("Dashboard");

    return (
        <div className="bg-[#DF5532] h-screen w-64 hidden md:block">
            <div className="flex flex-col space-y-6 py-5">
                {
                    sideBarData.map((data, index) => (
                        <Link to={data.link} key={index} onClick={()=>{

                            setItemData(data.text);

                        }}>
                            <div className={`flex items-center ${data.text == itemData ? "bg-gradient-to-r from-[#FFAD98] to-[#DF5532]":"bg-none"} gap-4 pl-5 p-2 rounded-2xl text-base hover:bg-[#e56a47] transition duration-200`}>
                                <img src={data.icon} alt={data.text} className="w-5 h-5" />
                                <h2 className="text-white text-lg font-medium">{data.text}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SideBar;
