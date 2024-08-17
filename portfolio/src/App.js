import React from 'react'

// COMPONENTS
import Header from './Components/Header';
import Hero from './Components/Hero';
import Aboutme from './Components/Aboutme';
import Portfolio from './Components/Portfolio';
import Youtube from './Components/Youtube';
import Contact from './Components/Contact';
import Footer from './Components/Footer';




const App = () => {
  return <>
      <Header/>

      <section id='Home' className='greyBg heroSection'>
      <Hero/>
      </section>

      <section id='About' className='whiteBg'>
         <Aboutme/>
      </section>

      <section id='Projects' className='greyBg'>
      <Portfolio/>
      </section>

      {/* <section id='YouTube' className='whiteBg'>
      <Youtube/>
      </section> */}

      <section id='Contact' className='greyBg'>
         <Contact/>
      </section>

      <section className='footerBg'>
      <Footer/>
      </section>
  </>
}

export default App;