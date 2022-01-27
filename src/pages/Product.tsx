import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
import star from '../assets/star.png'
import { Spinner } from '../components/Spinner/Spinner';

type Props = {};

const Product = (props: Props) => {

    const { id } = useParams()
    
    const product = products.find((prod) => prod._id === id )

    return product ? 
    (<div className='grid grid-cols-2 max-w-7xl m-auto px-10 gap-20 my-10'>
        <section>
            <img src={product.image} alt='product' className='rounded-lg'/>
        </section>

        <section>
            <h1 className='text-2xl'>{product.name}</h1>

            <section className='flex justify-between w-[200px] mt-2 text-gray-500 text-md'>
                <aside className='flex items-center'>
                    <p className='text-gray-500 mr-1'>{product.rating}</p>
                    <img src={star} alt='rating' className='w-4 h-4 '/>
                </aside>

                <aside>
                    <p>Ratings {product.numReviews}</p>
                </aside>

                <aside>
                    <p>{product.numReviews} Sold</p>
                </aside>
            </section>

            <h3 className='text-3xl font-medium my-10'>${product.price}</h3>

            <section className='w-[200px] flex justify-between mb-10'>
                <p>Quantity</p>
                
                <select className='w-[60px] border-gray-500 border-[1.5px] rounded-md px-2 focus:outline-none'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                   
                </select>
            </section>

            <section className=' max-w-[300px] flex justify-between mb-10'>
                <button className='px-6 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-400'>Add To Cart</button>
                <button className='px-8 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-400'>Buy Now</button>                
            </section>

            <section className='mt-16'>
                <h3 className='text-lg'>Product Specifications</h3>

                <section className='w-[250px] flex justify-between text-gray-500 mt-5 text-sm leading-8'>
                    <aside>
                        <p>Category</p>
                        <p>Stock</p>
                        <p>Brand</p>
                    </aside>

                    <aside>
                        <p>{product.category}</p>
                        <p>{product.countInStock}</p>
                        <p>{product.brand}</p>
                    </aside>
                </section>
            </section>

            <section className='mt-10 max-w-md '>
                <h3 className='text-lg'>Product Description</h3>
                <p className='text-gray-500 text-sm mt-5 leading-7 '>{product.description}</p>
            </section>




        </section>
    </div>)

    : <Spinner />
};

export default Product;