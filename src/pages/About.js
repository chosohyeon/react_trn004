import React from 'react'

const About = () => {
  return (
    <section className='About inner'>
      <p className='slogan'>good afternoonch!</p>
      <ul className='aboutInfo'>
        <li className='profilImg'>
          <img src={`${process.env.PUBLIC_URL}/assets/img/profil.png`} alt='' />
        </li>
        <li className='sns'>
          <div className='message'>
            <p>눈치빠른 사람<br />눈치없는 사람<br />모두 놀러오세요! 눈치 챙겨!</p>
          </div>
          <div className='insta'>
            <strong>Follow me</strong>
            <p>@afternoonch</p>
          </div>
        </li>
        <li className='service'>
          <div className='email'>
            <strong>E-main</strong>
            <p>afternoonch@naver.com</p>
          </div>
          <div className='hour'>
            <strong>Service Hour</strong>
            <p>Working 10am - 6pm<br />Lunch 12pm - 1pm</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default About