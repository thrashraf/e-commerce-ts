import React, { useEffect, useState } from 'react';
import { useSelector,RootStateOrAny } from 'react-redux';
import { DynamicInput } from '../components/DynamicInput'
import accountImage from '../assets/account.png'
import addressImage from '../assets/address.png'
import paymentImage from '../assets/payment.png'
import securityImage from '../assets/security.png'
import defaultImage from '../assets/default-user.png'
import { Spinner } from '../components/Spinner/Spinner' 


type Props = {};

export const Profile = (props: Props) => {


  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { userInfo, loading } = userDetail;

  const [editMode, setEditMode] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  useEffect(() => {

    if (!loading) {

      setFirstName(userInfo.firstName)
      setLastName(userInfo.lastName)
      setEmail(userInfo.email)
      setPhoneNumber(userInfo.phoneNumber)
    }

  }, [loading])


  
  return <div>

    {loading 
    ? <Spinner />
    : ( 
      
    <div className=' max-w-7xl flex px-10 m-auto'>

    <section className=' w-1/3 '>

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

  <section className='w-full pl-16 mt-5'>

    <section className='relative'>
        <div>
          <img src="https://images.unsplash.com/photo-1642866737560-de49d329a3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" 
          className='h-[170px] w-full object-cover rounded-t-xl' />
        </div>
        
        <div className=''>
          <img src={defaultImage} alt="profile" className='w-[130px] h-[130px] absolute bottom-[-70px] left-5'/>

          <button className='bg-blue-500 px-4 py-1 text-sm float-right text-white rounded-md  my-4' disabled={editMode} onClick={() => setEditMode(!editMode)} style={editMode ? {backgroundColor: '#dbeafe'} : {}}><i className="far fa-edit"></i> edit profile</button>

          <button className='bg-blue-500 px-4 py-1 text-sm float-right text-white rounded-md  my-4 mx-5' onClick={() => setEditMode(!editMode)} style={editMode ? {display: 'block'} : {display: 'none'}}><i className="far fa-save mr-2"></i>Save</button>

        </div>

    </section>      

    {userInfo ? (
      <div>
        <section className='grid grid-cols-2 mt-24 gap-5'>
          <DynamicInput content={firstName} editMode={editMode} title='First Name' onChange={(e) => setFirstName(e.target.value)}/>
          <DynamicInput content={lastName} editMode={editMode} title='Last Name' onChange={(e) => setLastName(e.target.value)}/>

          <DynamicInput content={email} editMode={editMode} title='Email' onChange={(e) => setEmail(e.target.value)}/>

          <DynamicInput content={phoneNumber === null ? 'Not Set' : phoneNumber} editMode={editMode} title='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)}/>
        </section>
      </div>
    ) : null}

  </section>
</div>)
  
    }

   
    
  </div>;
};
