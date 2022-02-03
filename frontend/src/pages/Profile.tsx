import React from 'react';
import accountImage from '../assets/account.png'
import addressImage from '../assets/address.png'
import paymentImage from '../assets/payment.png'
import securityImage from '../assets/security.png'



type Props = {};

export const Profile = (props: Props) => {
  return <div className=' max-w-7xl flex px-10'>

    <section className=' w-1/3 '>
      <h1>Settings</h1>

      <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer'>
        <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
          <img src={accountImage} alt="profile" className=' w-[25px] h-[25px]'/>
        </div>
        <section>
          <h1>Account</h1>
          <p className='text-[12px] mt-1 text-gray-400'>Personal information</p>
        </section>
      </aside>

      <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer'>
        <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
          <img src={addressImage} alt="address" className=' w-[25px] h-[25px]'/>
        </div>
        <section>
          <h1>Address</h1>
          <p className='text-[12px] mt-1 text-gray-400'>Shipping address</p>
        </section>
      </aside>

      <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer'>
        <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
          <img src={paymentImage} alt="payment" className=' w-[25px] h-[25px]'/>
        </div>
        <section>
          <h1>Payment method</h1>
          <p className='text-[12px] mt-1 text-gray-400'>Connected credit cards</p>
        </section>
      </aside>

      <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer'>
        <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
          <img src={securityImage} alt="security" className=' w-[25px] h-[25px]' />
        </div>
        <section>
          <h1>Security</h1>
          <p className='text-[12px] mt-1 text-gray-400'>Password</p>
        </section>
      </aside>



    </section>

    <section className='w-full'>
      <h1>Account</h1>
    </section>
    
  </div>;
};
