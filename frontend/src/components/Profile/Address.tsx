import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../actions/modalActions';
import axios from 'axios'
import { Modal } from '../Modal';
import { Input } from '../Input'

type Props = {};

export const Address = (props: Props) => {

    const [fullName, setFullName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [state, setState] = useState<string>('')

    const [userAddress, setUserAddress] = useState<any>([]);

    const [updateIndex, setUpdateIndex] = useState<number>();

    const [addNewModal, setAddNewModal] = useState<boolean>(false)
    const [editModal, setEditModal] = useState<boolean>(false)

    const dispatch = useDispatch()
    const modalDetail = useSelector((state: RootStateOrAny) => state.modalReducers);
    
    const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
    const { userInfo, loading } = userDetail;

    useEffect(() => {

        if (!loading) {
            
            if (userInfo.address === null) return
            setUserAddress(userInfo.address)
            console.log(userAddress);
        }

    }, [loading, userAddress, userInfo.address ])

    const { modal } = modalDetail
    //const { userInfo } = userDetail


    // * create new address
    const openAddAddressModal = () => {
        dispatch(showModal())
        setAddNewModal(!modal)
    }

    const setNewAddress = () => {

        const newAddress = {
            fullName,
            phoneNumber,
            address,
            state
        }

        userAddress.push(newAddress)
        
        axios.post('http://localhost:5000/api/addAddress', userAddress, {withCredentials: true})
        .then(res => {
            console.log(res);
            console.log(userAddress);
            alert(res.data.message)
        })
        .catch(err => alert(err.response.data.message))

    }

    //! need to remake this feature 🐛
    // * update address
    const openUpdateAddressModal = (id: number) => {
       
        dispatch(showModal())
        setEditModal(!modal)
        setUpdateIndex(id)
    }

    // * delete address
    const deleteAddress = (id:number) => {

        const address = [...userAddress]
        address.splice(id, 1)

        // ? make delete request
        setUserAddress(address);
        console.log(address);
    }


    
  return <div className=' mt-5'>

    <section className={`${modal && addNewModal ? 'flex' : 'hidden'} justify-center `}>
        <Modal fullName={fullName} phoneNumber={phoneNumber} state={state} address={address}
        setFullName={setFullName}
        setPhoneNumber={setPhoneNumber}
        setState={setState}
        setAddress={setAddress}
        save={setNewAddress}
        />
    </section>

    <section className={`${modal && editModal ? 'flex' : 'hidden'} justify-center `}>

    {updateIndex ? (
        <Modal fullName={userAddress[updateIndex].fullName} phoneNumber={userAddress[updateIndex].phoneNumber} state={userAddress[updateIndex].state} address={userAddress[updateIndex].address}
        setFullName={setFullName} setPhoneNumber={setPhoneNumber} setState={setState} setAddress={setAddress} save={setNewAddress} />
        )  : null}
        
    </section> 
    
    <section className='flex justify-between pb-5'>
        <h1>My Addresses</h1>

        <button className='text-white bg-blue-500 px-3 py-1 rounded-md text-sm' onClick={openAddAddressModal}>
            <i className="fas fa-plus"></i> Add Address
        </button>
    </section>



    {userInfo ? userAddress.length > 0 ? 
        
        userAddress.map((address: any, index:number) => {

        return (
        <section className='flex mt-5 border-b border-gray-400' key={index}>
    
            <aside className='w-1/3 grid grid-rows-5 gap-1 text-gray-400 text-sm'>
                <p>Full Name :</p>
                <p>Phone Number :</p>
                <p>Address :</p>
                <p>State :</p>
            </aside>
    
            <aside className='w-full grid grid-rows-5 text-sm'>
                <p>{address.fullName}</p>
                <p>{address.phoneNumber}</p>
                <p>{address.address}</p>
                <p>{address.state}</p>
            </aside>

            <button className='w-8 h-7 bg-blue-500 font-[8px] text-white px-2 rounded-full mr-2' onClick={openUpdateAddressModal.bind(this, index)}><i className="far fa-edit fa-xs"  ></i></button>

            <button className='w-8 h-7 bg-red-500 font-[8px] text-white px-2 rounded-full' onClick={deleteAddress.bind(this, index)}><i className="fa-solid fa-minus fa-xs"></i></button>
    
        </section>
    )
    })

    : (
    <section>
        <img src="/images/not-found.png" alt="" className='m-auto w-[400px] mt-10'/>
        <h1 className='text-center text-gray-400 mt-5'><i className="fas fa-map-marker-alt"></i> Please Add New Address</h1>
    </section>
    ) : null}


  </div>;
};
