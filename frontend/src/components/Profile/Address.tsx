import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../actions/modalActions';
import { Modal } from '../Modal';
import { Input } from '../Input'

type Props = {};

export const Address = (props: Props) => {

    const [fullName, setFullName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [state, setState] = useState<string>('')

    const dispatch = useDispatch()
    const modalDetail = useSelector((state: RootStateOrAny) => state.modalReducers);
    //const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);

    const { modal } = modalDetail
    //const { userInfo } = userDetail

    const addAddress = () => {
        dispatch(showModal())
    }

    
  return <div className=' mt-5'>

    <section className={`${modal ? 'flex' : 'hidden'} justify-center `}>
        <Modal>
            <section className='flex justify-between w-full gap-3'>
                <Input value={fullName} setValue={setFullName} placeholder='Full Name'/>
                <Input value={phoneNumber} setValue={setPhoneNumber} placeholder='Phone Number'/>
            </section>
            <section className=''>
                <Input value={state} setValue={setState} placeholder='State'/>
            </section>

            <section>
                <textarea name="" id="" cols={30} rows={6} placeholder='Address' className='w-full bg-gray-200 mt-5 rounded-lg px-3 py-1 focus:outline-none' />
            </section>

            <section className='flex justify-end'>
                <button className=' mt-2 px-6 py-2 max-w-sm bg-blue-500 rounded-lg text-white hover:bg-blue-400 focus:outline-none'>Set</button>
            </section>

        </Modal>
    </section> 
    
    <section className='flex justify-between'>
        <h1>My Addresses</h1>

        <button className='text-white bg-blue-500 px-3 py-1 rounded-md text-sm' onClick={addAddress}>
            <i className="fas fa-plus"></i> Add Address
        </button>
    </section>

    {/* <section className='flex mt-10 border-b border-gray-400 pb-3'>

        <aside className='w-1/3 grid grid-rows-5 gap-1 text-gray-400 text-sm'>
            <p>Full Name :</p>
            <p>Phone Number :</p>
            <p>Postcode :</p>
            <p>Address :</p>
            <p>State :</p>
        </aside>

        <aside className='w-full grid grid-rows-5 text-sm'>
            <p>Muhamad Zul Ashraf Bin Zulkifli</p>
            <p>+60 198112665</p>
            <p>27000</p>
            <p>No 12 Lorong 11 Taman Gelanggi Perdana 27000 Jerantut Pahang</p>
            <p>Pahang</p>
        </aside>

    </section> */}

    <section>
        <img src="/images/not-found.png" alt="" className='m-auto w-[400px] mt-10'/>
        <h1 className='text-center text-gray-400 mt-5'><i className="fas fa-map-marker-alt"></i> Please Add New Address</h1>
    </section>

  </div>;
};
