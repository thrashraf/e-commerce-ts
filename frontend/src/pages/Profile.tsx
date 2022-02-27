import React, { useState } from 'react';
import { useSelector,RootStateOrAny } from 'react-redux';
import { Spinner } from '../components/Spinner/Spinner' 
import { Information } from '../components/Profile/Information';
import { PersonalSideBar } from '../components/PersonalSideBar';
import { Address } from '../components/Profile/Address/Address';
import { Setting } from '../components/Profile/Setting';
import { Purchase } from '../components/Profile/Purchase';

type Props = {};

export const Profile = (props: Props) => {


  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);
  const { userLoading } = userDetail;
  const [tabs, setTabs] = useState<number>(1);
  
  const isSectionActive = (currentTabs: number) => {
    if (currentTabs === tabs) {
      return { display: 'block'}
    } else { 
      return { display: 'none' }
    }
  }

  return <div>


    {userLoading 
    ? <Spinner />
    : ( 

      <div className='max-w-7xl flex px-10 m-auto'>
        <section className=' w-[350px] max-w-[300px] mr-10'>
          <PersonalSideBar tabs={tabs} setTabs={setTabs} />
        </section>
        
        
        <section className='w-full' style={isSectionActive(1)}>
          <Information />
        </section>

        <section className='w-full' style={isSectionActive(2)}>
          <Address />
        </section>

        <section className='w-full' style={isSectionActive(3)}>
          <Purchase />
        </section>

        <section className='w-full' style={isSectionActive(4)}>
          <Setting />
        </section>

      </div>
    
  )
}

  
</div>;
};
