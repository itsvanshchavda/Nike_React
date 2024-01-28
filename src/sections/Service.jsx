import React from 'react'

import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
          {services.map((serv) => (
            <div key={serv.label}>
                  <ServiceCard {...serv}  />
            </div>
          ))}
    </section>
  )
}

export default Service