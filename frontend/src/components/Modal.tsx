import React from 'react';

type Props = {};

export const Modal = (props: Props) => {
  return <div className='h-[300px] w-[300px] bg-white text-center absolute z-20'>
      <h1>This is modal</h1>
  </div>;
};
