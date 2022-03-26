import React from 'react';
import OffersListed from './OffersListed';
import PostOffer from './PostOffer';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <section className='dashboard'>

      <Profile />
      <PostOffer />
      <OffersListed />  

    </section>
  )
}

export default Dashboard