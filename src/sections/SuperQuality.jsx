import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>

        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>

          We Provide You <span className='text-coral-red'>Super</span>  <span className='text-coral-red'>Quality</span> Shoe

        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>Ensuring unparalleled premium comfort and style, our meticulous craftsmanship takes footwear to new heights. Each pair is meticulously designed and curated to provide an exquisite blend of fashion-forward aesthetics and supreme comfort. </p>

        <p className='mt-6 lg:max-w-lg info-text'>Our dedication to quality is reflected in every detail, from the finest materials to the precision of our artisans.</p>

        <div className='mt-5 '>
          <Button label="View"  />
        </div>

      </div>

      <div className='flex flex-1 justify-center items-center'>
          <img src={shoe8} alt="shoeLeft" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality