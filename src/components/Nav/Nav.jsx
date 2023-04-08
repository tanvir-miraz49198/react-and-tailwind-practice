import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';


const Nav = () => {

    const [open,setOpen] = useState(false)

    const myArray = [
        { id: 1, name: "Object 1", path: "/path/to/object1" },
        { id: 2, name: "Object 2", path: "/path/to/object2" },
        { id: 3, name: "Object 3", path: "/path/to/object3" },
        { id: 4, name: "Object 4", path: "/path/to/object4" },
        { id: 5, name: "Object 5", path: "/path/to/object5" },
        
        
      ];
      
    return (
        <div>
            <nav className='bg-purple-400 '>
                <div onClick={() => setOpen(!open)} className='md:hidden p-2 '>
                    <span>{open === true ? 
                    <XMarkIcon className='h-6 w-6 ' /> :
                    <Bars3Icon className='h-6 w-6 ' />
                }</span>
                
                

                </div>
                 
                
                <ul className=  {`md:flex duration-500 absolute md:static ${open ? 'top-6' : '-top-48'} bg-purple-400  pl-3 rounded`}>
                    {
                        myArray.map(array => <Link
                        key = {array.id}
                        array = {array}
                        ></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Nav;