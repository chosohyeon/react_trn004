import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='Home inner'>
      <Link to='/shop'>
        <img src={`${process.env.PUBLIC_URL}/assets/img/mainImg.png`} alt='' />
      </Link>
    </section>
  )
}

export default Home