import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '../component/common/Box';

import { portfolioData } from '../utils/data';
import Loader from '../component/Loader';

import toast from 'react-hot-toast';

import { MdShoppingBag } from "react-icons/md";

import { FaBell } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";


const PortfolioPage = () => {
    const [projectData, setProjectData] = useState(null);
    const [activeTab, setActiveTab] = useState('Project');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjectData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `http://localhost:4000/api/getSpecificStatusTypeProject/${activeTab}`
                );

                if (response.data.length === 0) {
                    toast.error('No projects found with this type.');
                    return;
                }

                setProjectData(response.data.data);
            } catch (e) {
                setError('Failed to fetch project data.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjectData();
    }, [activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const filteredData = projectData?.filter((data) =>
        data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative flex flex-col min-w-full h-full sm:p-4 overflow-y-hidden">
            <div className="mb-6 flex justify-between items-center">
                <h1 className=" text-xl md:text-3xl font-semibold text-gray-800">Portfolio</h1>

                <div className=' gap-2 flex sm:hidden'>

                    <MdShoppingBag className='text-[#DF5532]' size={25}></MdShoppingBag>
                    <FaBell className='text-[#DF5532]' size={25}></FaBell>

                </div>

            </div>

            {/* Tabs and Search UI */}
            <div className="flex relative flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                <div className="flex relative gap-4 md:ml-4 justify-between md:justify-normal w-full md:gap-8 text-lg font-medium">
                    {portfolioData.map((tab) => (
                        <button
                            key={tab}
                            className={`border-b-[3px] rounded-sm text-sm md:text-xl pb-1 transition-colors duration-300 ${activeTab === tab
                                    ? 'border-[#DF5532] text-[#DF5532]'
                                    : 'border-transparent text-gray-600 hover:text-[#DF5532] hover:border-[#DF5532]'
                                }`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className=' relative w-full flex justify-center items-center'>

                    <div className='gap-2 justify-center items-center hidden xl:flex'>

                        <FaFilter size={20}></FaFilter>
                        <p className='text-[#303030] text-lg font-semibold'>Filter</p>

                    </div>
                    <div className="relative w-full md:w-auto flex items-center gap-2 md:pl-6">
                        <input
                            type="text"
                            placeholder="Search a project"
                            className=" relative w-full md:w-80 border border-[#E0E0E0] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="absolute right-2 md:right-auto md:relative bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-2 py-2 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                </div>

            </div>

            {/* Project Data List */}
            <div className="relative flex flex-col pb-48 md:pb-14 gap-6 scrollbar-hide overflow-y-auto h-[70vh] bg-white shadow-md rounded-lg p-1 sm:p-4">
                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : filteredData?.length > 0 ? (
                    filteredData.map((data, index) => (
                        <div key={index}>
                            <Box data={data} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No projects found matching your search.</p>
                )}
            </div>
        </div>
    );
};

export default PortfolioPage;


