import React from 'react';
import accountImage from '../assets/account.png'
import addressImage from '../assets/address.png'
import paymentImage from '../assets/payment.png'
import securityImage from '../assets/security.png'



type Props = {
    tabs: number,
    setTabs: (x: number) => any
};

export const PersonalSideBar = (props: Props) => {


  const isActive = (tabsNumber: number) => {
    
    if (tabsNumber === props.tabs) return {
      backgroundColor: '#eff6ff',
      border: '1.5px solid #0079fe'
    }
  }

  const changeTabs = (tabsNumber: number) => (e: React.MouseEvent) => {
    props.setTabs(tabsNumber)
  }

  return <div>
    
    <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer' style={isActive(1)} onClick={changeTabs(1)}>
      <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
        <img src={accountImage} alt="profile" className=' w-[25px] h-[25px]'/>
      </div>
      <section>
        <h1>Account</h1>
        <p className='text-[12px] mt-1 text-gray-400'>Personal information</p>
      </section>
    </aside>

    <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer'  style={isActive(2)} onClick={changeTabs(2)}>
      <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
        <img src={addressImage} alt="address" className=' w-[25px] h-[25px]'/>
      </div>
      <section>
        <h1>Address</h1>
        <p className='text-[12px] mt-1 text-gray-400'>Shipping address</p>
      </section>
    </aside>

    <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer'  style={isActive(3)} onClick={changeTabs(3)}>
      <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
        <img src={paymentImage} alt="payment" className=' w-[25px] h-[25px]'/>
      </div>
      <section>
        <h1>Payment method</h1>
        <p className='text-[12px] mt-1 text-gray-400'>Connected credit cards</p>
      </section>
    </aside>

    <aside className='flex my-5  border border-gray-300 rounded-xl px-3 py-3 cursor-pointer'  style={isActive(4)} onClick={changeTabs(4)}>
      <div className='bg-blue-500 px-3 py-3 rounded-lg mr-5'>
        <img src={securityImage} alt="security" className=' w-[25px] h-[25px]' />
      </div>
      <section>
        <h1>Security</h1>
        <p className='text-[12px] mt-1 text-gray-400'>Password</p>
      </section>
    </aside>

  </div>;
};
