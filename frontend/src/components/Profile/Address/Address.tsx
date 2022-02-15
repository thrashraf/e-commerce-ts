import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../actions/modalActions';
import { Modal } from '../../Modal';
import { addAddress, deleteAddressAction } from '../../../actions/addressActions';
import toast, { Toaster } from 'react-hot-toast';


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
    
    const { userInfo } = userDetail;
    const { modal } = modalDetail
    

    useEffect(() => {

            if (userInfo.address === null) return
            setUserAddress(userInfo.address)
            console.log(userAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // * create new address
    const openAddAddressModal = () => {
        dispatch(showModal())
        setAddNewModal(!modal)
    }

    const setNewAddress = async () => {

        const newAddress = {
            fullName,
            phoneNumber,
            address,
            state
        }
        await userAddress.push(newAddress)
        dispatch(addAddress(userAddress))
        toast.success('Successful Add')

    }

    //! need to remake this feature 🐛
    // * update address
    const openUpdateAddressModal = (id: number) => {
       
        dispatch(showModal())
        setEditModal(!modal)
        setUpdateIndex(id)

        setFullName(userAddress[id].fullName)
        setPhoneNumber(userAddress[id].phoneNumber)
        setState(userAddress[id].state)
        setAddress(userAddress[id].address)
    }

    const updateAddress = (id: number) => {

        const oldAddress = userAddress.map((add: any, index:number) => {
            return id === index ?
            {...add, fullName, phoneNumber, state, address}
            : add
        })

        console.log(oldAddress);
    }


    // * delete address
    const deleteAddress = async (id:number) => {
        
        const address = [...userAddress]
        address.splice(id, 1)

        setUserAddress(address)
        dispatch(deleteAddressAction(address))

        toast.success('successful Delete')
    }


    
  return <div className=' mt-5'>

    {/* //? add new modal */}
    <section className={`${modal && addNewModal ? 'flex' : 'hidden'} justify-center `}>
        <Modal fullName={fullName} phoneNumber={phoneNumber} state={state} address={address}
        setFullName={setFullName}
        setPhoneNumber={setPhoneNumber}
        setState={setState}
        setAddress={setAddress}
        save={setNewAddress}
        />
    </section>

    {/* //? update modal */}
    <section className={`${modal && editModal ? 'flex' : 'hidden'} justify-center `}>
    {updateIndex !== undefined && updateIndex >= 0 ? (
        <Modal fullName={fullName} phoneNumber={phoneNumber} state={state} address={address}
        setFullName={setFullName} setPhoneNumber={setPhoneNumber} setState={setState} setAddress={setAddress} save={updateAddress.bind(this, updateIndex)} />
        )  : null}
    </section> 

    

    <section className='flex justify-between pb-5'>
        <Toaster />
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
