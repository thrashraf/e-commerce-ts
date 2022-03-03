<<<<<<< HEAD
=======
import React, { useEffect } from 'react'
>>>>>>> 86f2bf7fcc7a49a5b9916f42602a6bc8b6a5eef1
import { useState } from 'react'
import { useAllOrder } from '../../hooks/useAllOrder';

type Props = {}

export const Purchase = (props: Props) => {

    const allOrder = useAllOrder()
    console.log(allOrder);
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

>>>>>>> 86f2bf7fcc7a49a5b9916f42602a6bc8b6a5eef1
  return (
    <div className='pl-10'>
        <div className='flex items-center pt-5'>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(0)}`} onClick={tabChangeHandler(0)}>
                <img src="/images/payment.png" alt="payment" className='object-contain w-[50%]' />
            </section>

            <span className={`w-[20%] h-[1.8px] ${isTabActive(1)}`}></span>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(1)}`} onClick={tabChangeHandler(1)}>
                <img src="/images/preparing.png" alt="payment" className='object-contain w-[70%]' />
            </section>
            
            <span className={`w-[20%] h-[1.8px] ${isTabActive(2)}`}></span>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(2)}`} onClick={tabChangeHandler(2)}>
                <img src="/images/delivery.png" alt="payment" className='object-contain w-[90%]' />
            </section>
            
            <span className={`w-[20%] h-[1.8px] ${isTabActive(3)}`}></span>

            <section className={`h-[80px] w-[80px]  rounded-full flex justify-center items-center ${isTabActive(3)}`} onClick={tabChangeHandler(3)}>
                <img src="/images/complete.png" alt="payment" className='object-contain w-[70%]' />
            </section>
        </div>

        <div className='w-full'>
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
<<<<<<< HEAD
=======


>>>>>>> 86f2bf7fcc7a49a5b9916f42602a6bc8b6a5eef1
        </div>
    </div>
  )
}