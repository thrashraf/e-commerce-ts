import React from 'react';
import { useSelector,RootStateOrAny } from 'react-redux';
import { Spinner } from '../components/Spinner/Spinner' 
import { Information } from '../components/Profile/Information';

type Props = {};

export const Profile = (props: Props) => {


  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { loading } = userDetail;

  
  return <div>

    {loading 
    ? <Spinner />
    : ( 
      
      <Information />
    
  )
}

   
    
</div>;
};
