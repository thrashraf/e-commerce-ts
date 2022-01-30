import React from 'react';
import loginImage from '../assets/login.jpg'

type Props = {};

export const Login = (props: Props) => {



  return <div className='grid grid-cols-2 h-screen'>
      
    <img src={loginImage} alt="" className='object-cover h-screen w-full' />
      

    <section className='flex flex-col justify-center px-[15%]'>
        
        <h1 className='text-gray-400'>Welcome Back</h1>
        <h1 className=' text-3xl font-semibold'>Log In to Continue.</h1>

        <input type='email' className='bg-gray-200 max-w-sm px-3 py-3 rounded-md focus:outline-none mt-10'/>
        <input type='password' className='bg-gray-200 max-w-sm px-3 py-3 rounded-md focus:outline-none mt-5'/>

        <section className='flex justify-center items-center mt-10 text-sm text-gray-400'>
            <input type="checkbox" name="" id="" className='mr-2' />
            <p>accept terms & condition</p>
        </section>

        <button className='mt-20 px-6 py-3 bg-blue-500 w-[150px] mx-auto font-semibold rounded-lg text-white'>Login</button>
    </section>

  </div>;
};
