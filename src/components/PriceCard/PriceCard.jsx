import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const PriceCard = ({price}) => {
    return (
        <div className='p-12 my-6 rounded text-center mt-12b bg-amber-500'>
            <h2>
            <span className='text-purple-800 text-3xl font-extrabold'>
            {price.price}
            </span>
            <span className='pl-2 text-sm font-bold text-white'>
                TK.
            </span>
            </h2>
            <h5 className='text-2xl  font-bold my-4'>{price.name}</h5>
            <p className='underline text-start text-white font-bold'>Features</p>

            <div className='text-start flex mt-4'>
            <CheckCircleIcon className='h-6 w-6 text-green-700' />
            <span className='font-semibold ml-2'>  {price.feature}

            </span>
            
            </div>
            <button className='w-full bg-lime-700 p-2 mt-4 rounded-md text-white cursor-pointer hover:bg-lime-800'>Buy Now</button>
        </div>
    );
};

export default PriceCard;