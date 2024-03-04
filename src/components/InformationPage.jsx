import React from 'react'
import NavSide from './NavSide'
import '../styles/InformationPage.scss';

const InformationPage = () => {
  return (
    <>
    <NavSide></NavSide>
    <div className='information-page'>
      <h1 className='information-page-heading'>About Speakic</h1>
      <p className='information-page-content'>
      Speakic is an innovative language learning and communication application designed to transcend linguistic barriers and foster global connectivity. With its comprehensive features, including interactive language learning modules, accurate translation services, and real-time speech conversion capabilities, Speakic offers users a versatile platform to enhance their language skills and facilitate seamless communication across different languages. Leveraging advanced machine learning algorithms and scalable cloud infrastructure, Speakic ensures a seamless user experience, robust functionality, and reliable performance. Whether users are beginners embarking on a journey to learn a new language or seasoned linguists seeking to enhance communication efficiency, Speakic provides a transformative solution that empowers users to navigate the diverse linguistic landscape with confidence and ease. Through its intuitive interface and powerful features, Speakic exemplifies the potential of technology to bridge divides and promote understanding in an increasingly interconnected world.
      </p>
      <h1 className='information-page-heading'>About Developers</h1>
      <p className='information-page-content'>
        The developers team of Speakic consists of :
        <ul className='information-page-list'>
          <li><b>Shivanshika Agarwal</b> </li>
          <ol>
            <li>
            <a href='https://www.linkedin.com/in/shivanshikaagarwal1505/'>Linkedin</a>
            </li>
            <li>
              <a href='https://github.com/ShivanshikaAgarwal1505'>Github</a>
            </li>
            <li>
              <a href='#'>Portfolio</a>
            </li>
          </ol>
          
          <li> <b>Vidushi Saxena</b></li>
          <ol>
            <li>
            <a href='https://www.linkedin.com/in/vidushi-saxena-071786228/'>Linkedin</a>
            </li>
            <li>
              <a href='https://github.com/vidushisaxen'>Github</a>
            </li>
            <li>
              <a href='https://vidushisaxena.netlify.app/'>Portfolio</a>
            </li>
          </ol>
        </ul>



      </p>
    </div>
    </>
  )
}

export default InformationPage