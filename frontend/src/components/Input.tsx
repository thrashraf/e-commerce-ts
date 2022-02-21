import React from 'react';

type Props = {
    value: any,
    setValue: (val: any) => void
    placeholder: string
};

export const Input = (props: Props) => {
  return <input type="text" value={props.value} placeholder={props.placeholder} onChange={(e) => props.setValue(e.target.value)} className='bg-blue-50 px-3 w-full py-3 rounded-md focus:outline-none mt-5'/>;
};
