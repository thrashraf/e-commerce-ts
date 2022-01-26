import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import defaultProfile from '../assets/default-user.png'


export const Navbar:FC = (props) => {
  return (
    <div className=' w-full flex justify-between h-16 items-center mt-1 max-w-7xl px-10 m-auto'>
    
    <section>
        <Link to='/'>
            <img src={logo} alt='logo' className='w-[100px] h-[65px] object-contain cursor-pointer'/>
        </Link>
    </section>

    {/* <section className='w-[300px]'>
        <ul className='flex justify-between font-medium'>
            <li>HOME</li>
            <li>PROFILE</li>
            <li>CART</li>
        </ul>
    </section> */}

    <section className='flex justify-around w-[300px] items-center'>
        <img src={defaultProfile} alt='profile'className='w-[35px] h-[35px] object-contain cursor-pointer'/>
        <p className=' font-medium cursor-pointer hover:text-gray-500'>John Doe</p>
        <button className='px-3 py-1.5 bg-blue-500 rounded-md text-white text-sm font-medium hover:bg-blue-400'>Sign Up</button>
    </section>
    
    </div>
)};
