import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="container inner">
        <h1 className='logo'>
          <Link to='/'>
            <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt='' />
          </Link>
        </h1>
        <div className="copyRight">
          <p>Copyright &copy; 2022 After Noonch. All Rights Reserved</p>
        </div>
        <address className='info'>
          <ul>
            <li>상호 : 애프터눈치</li>
            <li>대표 : 윤슬</li>
            <li>주소 : 부산시 수영구 해변별빛로 165길 7-3</li>
            <li>사업자등록번호 : 122-71-09234</li>
            <li>통신판매업신고증 : 제2022-부산수영-2020호</li>
            <li>E-mail : <a href="afternoonch@naver.com">afternoonch@naver.com</a></li>
          </ul>
        </address>
      </div>

    </footer>

  )
}

export default Footer