import React from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();
  console.log(location.state.name)
  return (
    <div>
      <Navbar></Navbar>
      This is Contact {location.state.name}
    </div>
  )
}

export default Contact
