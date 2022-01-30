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
            <input type="checkbox" name="" id="" className='mr-2'/>
            <p className='text-gray-400'>keep me logged in</p>
        </section>

        <button className='mt-10 px-6 py-3 bg-blue-500 font-semibold rounded-lg text-white hover:bg-blue-400 focus:outline-none'>Login</button>

        <p className='text-center mt-9 text-gray-400 text-sm'>Dont't have an account? <span className='text-blue-500 cursor-pointer hover:underline'>Sign up</span></p>
        <span className='text-blue-500 text-sm hover:underline text-center mt-5 cursor-pointer'>Forgot Password ?</span>
    </section>

  </div>;
};
