import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import star from '../assets/star.png';



type Props = {};

const Card = (props: Props) => {
  // eslint-disable-next-line no-lone-blocks
  return (
  <div className='grid grid-cols-5 gap-4 '>
      {products.map(product =>  
          (
              <div className=' text-sm cursor-pointer' key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt='' />
                    <section className='px-1 mt-5'>
                    <h1 >{product.name.length > 30 ? product.name.slice(0, 31) + '...' : product.name}</h1>

                    <aside className='flex justify-between mt-5'>
                        <p className='text-gray-500'>${product.price}</p>
                        <section className='flex'>
                            <p className='text-gray-500 mr-1'>{product.rating}</p>
                            <img src={star} alt='rating' className='w-4 h-4 '/>
                        </section>
                    </aside>
                    </section>
                  </Link>
              </div>
          )
      )}
  </div>
  )
};

export default Card;
