import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from '../services/auth/signup/signupActions';
import signupImage from '../assets/signup.jpg'

type Props = {};

export const SignUp = (props: Props) => {

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useDispatch();

  const signup = () => {
    dispatch(signupUser(firstName, lastName, email, password))
  }
  
  return <div className='grid grid-cols-2 h-screen'>
      
      <section className='flex flex-col justify-center px-[15%]'>
        
        <h1 className=' text-3xl font-semibold'>Sign Up.</h1>
        <h1 className='text-gray-400 mt-2'>Get In Touch With Us</h1>

        <section className='flex justify-between max-w-sm'>

          <input type='text' placeholder='first Name' className='bg-gray-200 w-[185px] px-3 py-3 rounded-md focus:outline-none mt-10' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>

          <input type='text' placeholder='Last Name' className='bg-gray-200 w-[185px] px-3 py-3 rounded-md focus:outline-none mt-10' value={lastName} onChange={(e) => setLastName(e.target.value)} /> 
        </section>

        <input type='email' placeholder='Email' className='bg-gray-200 max-w-sm px-3 py-3 rounded-md focus:outline-none mt-5' value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type='password' placeholder='Password' className='bg-gray-200 max-w-sm px-3 py-3 rounded-md focus:outline-none mt-5' value={password} onChange={(e) => setPassword(e.target.value)} />

        <section className='flex justify-center items-center mt-10 text-sm text-gray-400'>
            <input type="checkbox" name="" id="" className='mr-2'/>
            <p className='text-gray-400'>I agree <span className='text-blue-500 cursor-pointer hover:underline'>Term Of Service</span> and <span className='text-blue-500 cursor-pointer hover:underline'> Privacy Policy</span></p>
        </section>

        <button className='mt-10 px-6 py-3 max-w-sm bg-blue-500 font-semibold rounded-lg text-white hover:bg-blue-400 focus:outline-none' onClick={signup}>Sign Up</button>

        <p className='text-center mt-9 text-gray-400 text-sm'>Already have an account?  <Link to='/login' className='text-blue-500 cursor-pointer hover:underline'>Login</Link></p>
    </section>

    <img src={signupImage} alt="" className='object-cover h-screen w-full' />
  </div>;
};
