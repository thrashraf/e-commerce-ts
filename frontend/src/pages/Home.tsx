import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Spinner } from '../components/Spinner/Spinner';

type Props = {};

export const Home = (props: Props) => {

  const [data, setData] = useState<any []>([]);

  useEffect(() => {

    const fetchProducts = async () => {
      await axios.get('http://localhost:5000/product')
      .then(res => {

        const productsData = res.data;
        setData(productsData)
      })
      .catch(err => console.log(err))
    }

    fetchProducts()

  }, [])

  console.log(data);

  return <div className=' max-w-7xl px-10 m-auto'>
    

      {/* carousel */}
      {/* Search */}
    
    <div>
      {data.length > 0 ? 
        <Card data={data}/> :
        <Spinner />
      }
    </div>
  </div>;
};
