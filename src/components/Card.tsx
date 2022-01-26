import React from 'react';
import products from '../products';
type Props = {};

const Card = (props: Props) => {
  // eslint-disable-next-line no-lone-blocks
  return (
  <div className='grid grid-cols-5 gap-4 '>
      {products.map(product =>  
          (
              <div className=' text-sm cursor-pointer'>
                  <img src={product.image} alt='' />

                  <section className='px-1 py-2'>
                    <h1 >{product.name.length > 30 ? product.name.slice(0, 31) + '...' : product.name}</h1>
                    <aside className='flex justify-between mt-5'>
                        <p className='text-gray-500'>${product.price}</p>
                        <p className='text-gray-500'>{product.countInStock ? 'available' : 'out of stock'}</p>
                    </aside>
                  </section>
              </div>
          )
      )}
  </div>
  )
};

export default Card;
