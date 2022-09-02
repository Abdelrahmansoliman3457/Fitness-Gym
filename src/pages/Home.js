import React from 'react';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import MainHeader from '../components/MainHeader';
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials';
import Values from '../components/Values';


const Home = () => {
  return (
    <div>
      <MainHeader  />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </div>
  )
}

export default Home
