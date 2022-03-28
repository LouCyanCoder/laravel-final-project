import React from 'react'

const PostOffer = () => {
  return (
      <section className='postoffer'>
              <h2>Post a new offer</h2>
              
          <div className='postoffer__container'>

            <a href="/accommodation/create">
            <article className='postoffer__card accommodation'>
                  <img src='../../images/accomodation.png' alt='' />
                  <h3>Accommodation</h3>
            </article>
            </a>
              
            <a href="/food/create">
            <article className='postoffer__card food'>
                  <img src='../../images/diet.png' alt='' />
                  <h3>Food</h3>
            </article>
            </a>
            
            <a href="/transport/create">
            <article className='postoffer__card transport'>
                  <img src='../../images/bus.png' alt='' />
                  <h3>Transport</h3>
            </article>
            </a>
            
            <a href="/service/create">
            <article className='postoffer__card services'>
                  <img src='../../images/helping.png' alt='' />
                  <h3>Services</h3>
              </article>
            </a>
              
          </div>
          
      </section>
  )
}

export default PostOffer