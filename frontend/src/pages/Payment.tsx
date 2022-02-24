import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderDetails } from '../services/order/orderAction';

type Props = {}

export const Payment = (props: Props) => {

  const { id } = useParams()
  const dispatch = useDispatch()

  const orderDetail = useSelector((state: RootStateOrAny) => state.orderReducers);
  const { order } = orderDetail;

  const [orderItem, setOrderItem] = useState<any[]>();

  useEffect(() => {
    if (id) {
      dispatch(getOrderDetails(id))  
      setOrderItem(order.orderItem)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='max-w-7xl px-10 m-auto flex justify-between pb-20 pt-5'>

    </div>
  )
}