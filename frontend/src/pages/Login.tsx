import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/loginActions';
import loginImage from '../assets/login.jpg'


type Props = {};

export const Login = (props: Props) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { loading, userInfo, error } = userDetail;


  const login = () => {

    if (email.trim.length < 0 && password.trim.length < 0) return console.log('lol');
    dispatch(loginUser(email, password))
  }

  useEffect(() => {
    if (userInfo) {
      navigate(userInfo.redirect)
    }
  }, [userInfo, navigate])


  return <div className='grid grid-cols-2 h-screen'>
      
    <img src={loginImage} alt="" className='object-cover h-screen w-full' />
      
    <section className='flex flex-col justify-center px-[15%]'>
        
        <h1 className='text-gray-400'>Welcome Back</h1>
        <h1 className=' text-3xl font-semibold'>Log In to Continue.</h1>

        <input type='email' placeholder='Email' className='bg-gray-200 max-w-sm px-3 py-3 rounded-md focus:outline-none mt-10' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' className='bg-gray-200 max-w-sm px-3 py-3 rounded-md focus:outline-none mt-5' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <section className='flex justify-center items-center mt-10 text-sm text-gray-400'>
            <input type="checkbox" name="" id="" className='mr-2'/>
            <p className='text-gray-400'>keep me logged in</p>
        </section>

        <button className='mt-10 px-6 py-3 max-w-sm bg-blue-500 font-semibold rounded-lg text-white hover:bg-blue-400 focus:outline-none' onClick={login}>Login</button>

        <p className='text-center mt-9 text-gray-400 text-sm'>Dont't have an account?<Link to='/signup' className='text-blue-500 cursor-pointer hover:underline ml-1'>Sign up</Link></p>
        <span className='text-blue-500 text-sm hover:underline text-center mt-5 cursor-pointer'>Forgot Password ?</span>
    </section>

  </div>;
};
