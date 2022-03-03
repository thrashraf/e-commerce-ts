<<<<<<< HEAD

import React, { useEffect } from 'react'

=======
import React from 'react'
>>>>>>> parent of 0ec436ac (fix array)
import { useState } from 'react'

type Props = {}

export const Purchase = (props: Props) => {

    const [currentTab, setCurrentTab] = useState<number>(0);

    const tabChangeHandler = (number: number)  => (e: React.MouseEvent) => {
        setCurrentTab(number)
    }

    const isTabActive = (number: number) => {
        if (number === currentTab) {
            return (
                'bg-blue-500'
            )
        } else {
            return 'bg-gray-300'
        }

    }

<<<<<<< HEAD
=======

>>>>>>> parent of 0ec436ac (fix array)
  return (
    <div className='pl-10'>
        <div className='flex items-center pt-5'>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(0)}`} onClick={tabChangeHandler(0)}>
                <span className='text-white'>
                    <i className="fa-solid fa-dollar-sign fa-xl"></i>
                </span>
            </section>

            <span className={`w-[120px] h-[1.8px] ${isTabActive(1)}`}></span>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(1)}`} onClick={tabChangeHandler(1)}>
                <span className='text-white'>
                    <i className="fa-solid fa-box-open fa-xl"></i>
                </span>
            </section>
            
            <span className={`w-[120px] h-[1.8px] ${isTabActive(2)}`}></span>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(2)}`} onClick={tabChangeHandler(2)}>
                <span className='text-white'>
                    <i className="fa-solid fa-truck fa-xl"></i>
                </span>
            </section>
            
            <span className={`w-[120px] h-[1.8px] ${isTabActive(3)}`}></span>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(3)}`} onClick={tabChangeHandler(3)}>
                <span className='text-white'>
                    <i className="fa-solid fa-check fa-xl"></i>
                </span>
            </section>
        </div>

        <div className='w-full'>
<<<<<<< HEAD
            {/* map the order item */}
            {currentTab === 0 ? (
                allOrder?.filter((order: any) => {
                    return !order.isPaid
                }).map((order: any) => {
                    return (
                        console.log(order)
                    )
                })
            ) : (
                <img src="/images/empty-cart.png" alt="" className='object-contain w-[40%] m-auto mt-20'/>
            ) }

=======
            <img src="/images/empty-cart.png" alt="" className='object-contain w-[40%] m-auto mt-20'/>
>>>>>>> parent of 0ec436ac (fix array)
        </div>
    </div>
  )
}