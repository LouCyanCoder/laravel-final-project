import React from 'react'

const PostOffer = () => {
  return (
      <section className='postoffer'>
          <h2>Post a new offer</h2>
          <div className='postoffer__container'>

            <article className='postoffer__card--accommodation'>
                  <img src='' alt='' />
                  <h3>Accommodation</h3>
            </article>
              
            <article className='postoffer__card--food'>
                  <img src='' alt='' />
                  <h3>Food</h3>
            </article>
            
            <article className='postoffer__card--transport'>
                  <img src='' alt='' />
                  <h3>Transport</h3>
            </article>
            
            <article className='postoffer__card--services'>
                  <img src='' alt='' />
                  <h3>Services</h3>
              </article>
              
          </div>
          
      </section>
  )
}

export default PostOffer