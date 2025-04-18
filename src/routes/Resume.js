import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Resume = () => {
  return (
    <div>
        <Navbar />
        <a href="/prajwal_resume.pdf">RESUME</a>
        <Form />
        <Footer />
    </div>
  );
};

export default Resume;