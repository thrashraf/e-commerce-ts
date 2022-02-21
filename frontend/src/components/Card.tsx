import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    
    data: any[]
};

const Card = (props: Props) => {
  // eslint-disable-next-line no-lone-blocks
  return (
  <div className='grid grid-cols-5 gap-4 '>
      {props.data.length > 0 ? props.data.map(product =>  
          (
              <div className=' text-sm cursor-pointer' key={product.id}>
                  <Link to={`/product/${product.id}`}> 
                    <img src={product.image} alt='product' className='rounded-t-lg' loading='lazy'/>
                    <section className='px-1 mt-5'>
                    <h1 >{product.name.length > 30 ? product.name.slice(0, 21) + '...' : product.name}</h1>

                    <aside className='flex justify-between mt-6'>
                        <p className='text-gray-500'>${product.price}</p>
                        <section className='flex'>
                            <p className='text-gray-500 mr-1'>{product.sold} Sold</p>
                            {/* <img src={star} alt='rating' className='w-4 h-4 '/> */}
                        </section>
                    </aside>
                    </section>
                  </Link>
              </div>
          )
      ) : null}
  </div>
  )
};

export default Card;
