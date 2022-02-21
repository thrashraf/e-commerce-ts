import React, { useState } from 'react'
import { Input } from '../components/Input'
import { ShippingSummary } from '../components/summary/shipping-summary/ShippingSummary'

type Props = {}

export const Shipping = (props: Props) => {

    const [fullName, setFullName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [state, setState] = useState<string>('')
    
  return (
    <div className='max-w-7xl px-10 m-auto flex justify-between'>
        <div className='w-[60%]'>

            <h1 className='font-medium mt-5'>Shipping details</h1>
            <section className='flex justify-between mt-5 items-center'>
                <p className='text-sm'>Use saved address</p>
                <select name="" id="" className='bg-blue-50 border-[1.5px] rounded-md p-2 focus:outline-none border-blue-50'>
                    <option value="1">Default</option>
                    <option value="2">Address 2</option>
                    <option value="3">Address 3</option>
                    <option value="4">Address 4</option>
                    <option value="5">Address 5</option>
                </select>
            </section>

        <section className="flex justify-between w-full gap-3">
        <Input
          value={fullName}
          setValue={setFullName}
          placeholder="Full Name"
        />
        <Input
          value={phoneNumber}
          setValue={setPhoneNumber}
          placeholder="Phone Number"
        />
      </section>
      <section className="">
        <Input
          value={state}
          setValue={setState}
          placeholder="State"
        />
      </section>

      <section>
        <textarea
          name=""
          id=""
          cols={30}
          rows={6}
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full bg-blue-50 mt-5 rounded-lg px-3 py-1 focus:outline-none"
        />
      </section>

      <section className="flex justify-end mt-5">
        <button
          className=" mt-2 px-9 py-2 max-w-sm rounded-lg border-2 hover:bg-gray-300 focus:outline-none border-white "
        >
          Cancel
        </button>

        <button
          className=" mt-2 px-9 py-2 max-w-sm bg-blue-500 rounded-lg text-white hover:bg-blue-400 focus:outline-none ml-5"
        >
          Confirm
        </button>
      </section>
    </div>
    
        <div className='w-[35%] mt-5'>
            <ShippingSummary />
        </div>
    </div> 

  )
}