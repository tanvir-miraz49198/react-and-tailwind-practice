import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
const Link = ({array}) => {
    return (
        <div>
            <li className='mr-12 font-bold hover:bg-purple-800 p-2 rounded'>
                <a href={array.path}>{array.name}</a>
                
            </li>
        </div>
    );
};

export default Link;