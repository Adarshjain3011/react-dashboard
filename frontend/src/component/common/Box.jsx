
import React from 'react';

import Button from './Button';

const Box = ({ data }) => {

    console.log("data is",data.status);

    return (

        <div className=' w-full sm:w-fit relative flex rounded-2xl border border-[#F4F4F4] shadow-md'>

            <div className='w-[100px]'>

                <img src={data.image} className='w-full h-full md:h-full rounded-l-2xl' alt="" />

            </div>

            <div className=' relative flex flex-col gap-4 justify-between rounded-2xl p-2 sm:p-4 bg-white w-[80%] sm:w-[40vw] md:w-[50vw]'>

                <div className='flex flex-col gap-2'>

                    <h1 className='text-[#303030] font-semibold uppercase text-xs md:text-xl'>{data.title}</h1>

                    {

                        String(data.description).length < 120 ? <p className='text-[#9E95A2] text-base hidden md:block'>{data.description}</p> : <p className='text-[#9E95A2] hidden md:block text-base'>{data.description.substring(1, 120)}...</p>
                    }

                </div>

                <div className='flex justify-between items-center'>

                    <div className='flex flex-col'>

                        <h1 className='text-[#303030] font-semibold capitalize'>{data.language}</h1>

                        <p className='text-[#9E95A2] text-sm md:text-lg'>{data.author}</p>

                    </div>

                    <Button text='A' isPlacedAtLast={true} />

                </div>


            </div>

        </div>
    )
}

export default Box;


