import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

type Props = {};

export const Home = (props: Props) => {

  const [data, setData] = useState<any []>([]);

  useEffect(() => {

    const fetchProducts = async () => {
      axios.get('http://localhost:5000/product')
      .then(res => {

        const data = res.data;
        setData(data)
      })
      .catch(err => console.log(err))
    }

    fetchProducts()

  }, [])



  return <div className=' max-w-7xl px-10'>
    

      {/* carousel */}
      {/* Search */}
    
    <div className=''>
        <Card data={data}/>
    </div>
  </div>;
};
