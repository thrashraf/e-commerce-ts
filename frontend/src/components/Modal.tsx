import React from 'react';

type Props = {
  children: any
};

export const Modal = (props: Props) => {
  return <div className='h-[400px] w-[550px] mt-10 bg-white text-center absolute z-20 rounded-lg p-5'>
      {props.children}
  </div>;
};
