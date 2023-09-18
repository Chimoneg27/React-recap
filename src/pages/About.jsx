import React from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar></Navbar>
      This is about {location.state.name}
    </div>
  )
}

export default About
