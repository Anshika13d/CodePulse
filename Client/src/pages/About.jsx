import React, { useContext } from 'react'
import Footer from '../components/Footer/Footer'
import { AuthContext } from '../context/AuthContext';

function About() {
  const {user, setUser} = useContext(AuthContext);
  return (

    
    <div className='bg-gradient-to-r from-gray-800 to-black'>
      <div>
        
        <h1 className='text-center text-white text-4xl pt-8 pb-12'>About</h1>
        <p className='text-white text-center m-10'>Here at MountYourWay, we provide an evironment which helps develop consistency for the beginners</p>
      </div>

      <Footer />
    </div>
  )
}

export default About