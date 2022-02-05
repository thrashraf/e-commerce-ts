import React from 'react';

type Props = {};

export const Address = (props: Props) => {
  return <div className=' mt-5'>
    
    <section className='flex justify-between'>
        <h1>My Addresses</h1>

        <button className='text-white bg-blue-500 px-3 py-1 rounded-md text-sm'>
            <i className="fas fa-plus"></i> Add New Address
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
