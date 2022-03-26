import React from 'react'

const OffersListed = () => {
  return (
    <section className='offerslisted__container'>
      <h2>Offers listed</h2>

      <div className='offerslisted__list'>
        <article className='offerslisted__listitem'>
          
          <div className='offerslisted__listitem--type'>
            <h3>{ }</h3>
          </div>

          <div className='offerslisted__listitem--description'>
            <p>{ }</p>
          </div>
          
          <div className='offerslisted__listitem--dateadded'>
            <p>{ }</p>
          </div>
          
      </article>

      </div>
    </section>
  )
}

export default OffersListed