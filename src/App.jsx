import React from 'react'


import Nav from './components/Nav'

import {
  Hero,
  PopularProducts,
  SuperQuality,
  Service,
  SpecialOffers,
  CustomerReviews,
  Subcribe,
  Footer
} from './sections'

const App = () => {
  return (
    <main className='relative'>

      <Nav/>

      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>

      <section className='padding'>
        <PopularProducts/>
      </section>


      <section className='padding'>
        <SuperQuality/>
      </section>


      <section className='padding'>
        <Service/>
      </section>


      <section className='padding'>
        <SpecialOffers/>
      </section>


      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
      </section>


      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subcribe/>
      </section>

      
      <section className='padding bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>


    </main>
  )
}

export default App