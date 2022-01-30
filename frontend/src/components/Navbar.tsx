import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
// import defaultProfile from '../assets/default-user.png'
import { useLocation } from 'react-router-dom';



export const Navbar:FC = (props) => {

    const location = useLocation();
    console.log(location);

  return (
    <div className=' w-full justify-between h-16 items-center mt-1 max-w-7xl px-10 m-auto' style={location.pathname.toString() === '/login' || location.pathname.toString() === '/signup' ? {display: 'none'} : {display: 'flex'}}>
    
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

    <section className='flex justify-evenly w-[300px] items-center'>
        {/* <img src={defaultProfile} alt='profile'className='w-[35px] h-[35px] object-contain cursor-pointer'/>
        <p className=' font-medium cursor-pointer hover:text-gray-500'>John Doe</p> */}
        
        <section className='relative'>
            <span className=' px-[6px] py-[2px] text-white bg-[#F90716] rounded-full absolute left-3 bottom-3 text-[8px] cursor-pointer'>1</span>
            <span className=' text-gray-400 hover:text-gray-300'><i className="fas fa-bell fa-lg cursor-pointer" /></span>
        </section>

        <section className='relative'>
            <span className=' px-[6px] py-[2px] text-white bg-[#F90716] rounded-full absolute left-3 bottom-3 text-[8px] cursor-pointer '>1</span>
            <span className=' text-gray-400 hover:text-gray-300'><i className="fas fa-shopping-cart fa-lg cursor-pointer" /></span>
        </section>
        
        <Link to='/login'>
            <button className='px-3 py-1.5 bg-blue-500 rounded-md text-white text-sm font-medium hover:bg-blue-400 focus:outline-none'>Log in</button>
        </Link>
    </section>
    
    </div>
)};
