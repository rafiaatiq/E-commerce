import React from 'react'
import Hero from './Hero'
import Collage from './Collage'
import Products from './Products'
import Banner from './Banner'
import Articles from './Articles'

function Home() {
  return (
    <div>
        <Hero/>
        <Collage/>
        <Products/>
        <Banner/>
        <Articles/>
    </div>
  )
}

export default Home